import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { TabserviceService } from 'src/app/shared/tabservice.service';
import { Router } from '@angular/router';
import { Options } from 'sortablejs';
import { LookupService } from 'src/app/services/util/lookup.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/components/alert-modal/alert.service';
import { ValidationService } from 'src/app/components/validation-message/validation.service';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss', '../../styles/custom-slider.scss'],
})

export class AddQuestionsComponent {
  isExistQues: number = 1;
  preDefinedQuestions: any = [];
  questionTypes: any = [];
  selectedQuestions = [];
  isEditPreDefined: boolean = false;
  editFlag: boolean = false;
  editId: any;
  addQuesForm: FormGroup;
  editQuesForm: FormGroup;
  options1: Options = {
    group: {
      name: 'clone-group',
      pull: 'clone',
      put: false
    }
  };
  options2: Options = {
    group: 'clone-group',
    draggable: 'false'
  };
  searchText = '';
  data: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private lookupService: LookupService,
    private tabservice: TabserviceService,
    private questionnaireService: QuestionnaireService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private alertService: AlertService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.addQuesForm = this.fb.group({
      questions: this.fb.array([])
    });
    this.editQuesForm = this.fb.group({
      index: [],
      preDefinedQuestionId: [],
      preDefinedQuestion: ['', [Validators.required, ValidationService.whiteSpaceValidator]],
      file: [''], //just for file upload formcontrol
      isQuesImg: [''], //show and hide the upload button
      quesImg: [''], //to show the preview of the file
      questionImageName: [''], //send the image name to api
      questionImageUrl: [''], //get the image url (uploaded to google cloud)
      questionTypeId: [0, [Validators.required]],
      isMandatory: [false],
      saveForFuture: [false],
      questionAnswerOptions: this.fb.array([this.createQuesAns()]),
      isUpdated: [false],
      other: this.fb.group(
        {
          floor: [, [Validators.min(0)]],
          ceil: [],
          tickStep: [],
          disabled: true,
          isContinuousScale: false,
          isVerticalScale: false,
          getLegend: (value: number): string => {
            return '' + value;
          }
        }
      )
    });
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      preDefinedQuestionId: [],
      preDefinedQuestion: ['', [Validators.required, ValidationService.whiteSpaceValidator]],
      file: [''], //just for file upload formcontrol
      isQuesImg: [''], //show and hide the upload button
      quesImg: [''], //to show the preview of the file
      questionImageName: [''], //send the image name to api
      questionImageUrl: [''], //get the image url (uploaded to google cloud)
      questionId: [],
      questionTypeId: [1],
      isMandatory: [false],
      saveForFuture: [false],
      questionAnswerOptions: this.fb.array([this.createQuesAns()]),
      isUpdated: [false],
      other: this.fb.group(
        {
          floor: [, [Validators.min(0)]],
          ceil: [],
          tickStep: [],
          disabled: true,
          isContinuousScale: false,
          isVerticalScale: false,
          getLegend: (value: number): string => {
            return '' + value;
          }
        }
      )
    });
  }

  createQuesAns(): FormGroup {
    return this.fb.group({
      questionAnswerId: [],
      questionAnswer: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getInitialData();
    if (this.router.url.includes("/user/questionnaire/edit")) {
      this.editFlag = true;
      this.editId = this.router.url.split('edit/')[1].split('/')[0];
      this.isExistQues = 2;
    }
    this.patchData();
  }

  patchData() {
    this.data = this.tabservice.getModelData();
    if (!this.data) {
      if (!this.editFlag)
        this.router.navigate(['/user/questionnaire/add/basic-details']);
      else
        this.router.navigate([`/user/questionnaire/edit/${this.editId}/basic-details`]);
      return;
    }
    this.selectedQuestions = this.data ? (this.data['selectedQuestions'] ? this.data['selectedQuestions'] : []) : [];
    let addQuestions = this.data ? (this.data['addedQuestions'] ? this.data['addedQuestions'] : []) : [];
    if (addQuestions.length) {
      for (var i = 0; i < addQuestions.length; i++) {
        let ques = addQuestions[i];
        // this.addQues();
        let quesArr = this.addQuesForm.get('questions') as FormArray;
        quesArr.push(this.createQuestion());
        this.addQuesForm.controls.questions['controls'][i].patchValue(ques);
        if (ques.questionTypeId === 4 || ques.questionTypeId === 5 || ques.questionTypeId === 7 || ques.questionTypeId === 8 || ques.questionTypeId === 9) {
          let arr = this.addQuesForm.get('questions')['controls'][i].get('questionAnswerOptions') as FormArray;
          arr.controls = [];
          arr.patchValue([]);
        }
        for (var j = 0; j < ques.questionAnswerOptions.length; j++) {
          let opt = ques.questionAnswerOptions[j];
          if (j != 0)
            this.addQuesAns('addQues', i);
          this.addQuesForm.controls.questions['controls'][i].controls.questionAnswerOptions['controls'][j].patchValue(opt);
        }
      }
    }
  }

  async getInitialData() {
    this.spinner.show();
    // QuestionTypes
    await this.lookupService.getQuestionType('/api/lookup/getQuestionType').subscribe(res => {
      if (res.status.success === true) {
        this.questionTypes = res.response.questionTypes;
      }
      else {
        this.toastr.error(res.errors[0].message);
        this.spinner.hide();
      }
    },
      err => {
        if (err.status == 500) {
          this.toastr.error(err.error.message + ". " + "Please try after sometime or contact administrator.");
          this.spinner.hide();
        }
        else {
          this.toastr.error(err.error.errors[0]?.message || 'Something went wrong. Please try after sometime or contact administrator.');
          this.spinner.hide();
        }
      }
    );

    // PreDefinedQuestions
    this.getPreDefinedQuestions();
  }

  getPreDefinedQuestions() {
    this.spinner.show();
    this.lookupService.getPredefinedQuestions(`/api/lookup/getPreDefinedQuestions?searchText=${this.searchText}`).subscribe(res => {
      if (res.status.success === true) {
        this.preDefinedQuestions = res.response.preDefinedQuestions;
        this.preDefinedQuestions.forEach((element: any) => {
          if (element.preDefinedQuestionId) {
            // element['questionId'] = element.preDefinedQuestionId;
            element['other'].disabled = true;
            element['other'].disabled = true;
            element['other'].showTicks = !element['other'].isContinuousScale;
            element['other'].vertical = element['other'].isVerticalScale;
            element['other'].getLegend = (value: number): string => {
              return value != element['other'].ceil ? '' + value : '';
            }
          }
        });
        this.spinner.hide();
      }
      else {
        this.toastr.error(res.errors[0].message);
        this.spinner.hide();
      }
    },
      err => {
        this.spinner.hide();
        if (err.status == 500) {
          this.toastr.error(err.error.message + ". " + "Please try after sometime or contact administrator.");
        }
        else {
          this.toastr.error(err.error.errors[0]?.message || 'Something went wrong. Please try after sometime or contact administrator.');
        }
      }
    );
  }

  formReset(formName) {
    if (formName === 'editQues') {
      this.editQuesForm.reset();
      this.isEditPreDefined = false;
    }
  }

  quesUpdated(indx) {
    this.addQuesForm.get('questions')['controls'][indx].patchValue({ isUpdated: true });
  }

  setSliderValidators(ctrls: AbstractControl) {
    let keys = ['floor', 'ceil', 'tickStep'];
    keys.forEach((key) => {
      let validators = [Validators.required];
      if (key == 'floor')
        validators.push(Validators.min(0));
      this.setValidator(ctrls.get(key), validators);
    });
    this.changeDetector.detectChanges();
  }

  resetSliderValidators(ctrls: AbstractControl) {
    let keys = ['floor', 'ceil', 'tickStep'];
    keys.forEach((key) => {
      this.clearValidator(ctrls.get(key));
    });
  }

  typeChanged(value, formName, quesIndx) {
    let arr;
    if (formName === 'editQues') {
      arr = this.editQuesForm.get('questionAnswerOptions') as FormArray;
      this.editQuesForm.get('other').patchValue({ floor: '', ceil: '', tickStep: '' });

      if (value === 6) {
        this.setSliderValidators(this.editQuesForm.get('other'));
      }
      else {
        this.resetSliderValidators(this.editQuesForm.get('other'));
      }
    }
    else {
      arr = this.addQuesForm.get('questions')['controls'][quesIndx].get('questionAnswerOptions') as FormArray;
      this.addQuesForm.get('questions')['controls'][quesIndx].get('other').patchValue({ floor: '', ceil: '', tickStep: '' });
      this.quesUpdated(quesIndx);

      if (value === 6) {
        this.setSliderValidators(this.addQuesForm.get('questions')['controls'][quesIndx].get('other'));
      }
      else {
        this.resetSliderValidators(this.addQuesForm.get('questions')['controls'][quesIndx].get('other'));
      }
    }

    if (value == 1 || value == 2 || value == 3) {
      if (arr.value.length) {
        arr.controls.forEach((quesAnswr: any) => {
          this.setValidator(quesAnswr.get('questionAnswer'), [Validators.required]);
        });
      }
      else {
        arr.push(this.createQuesAns());
      }
    }
    else {
      arr.controls = [];
      arr.patchValue([]);
      if (value == 6) {
        arr.push(this.createQuesAns());
        arr.controls.forEach((quesAnswr: any) => {
          this.setValidator(quesAnswr.get('questionAnswer'), [Validators.maxLength(30), Validators.required]);
        });
      }
    }
  }

  editPreDefinedQuestion(question, i) {
    if (question.questionTypeId === 4 || question.questionTypeId === 5 || question.questionTypeId === 7 || question.questionTypeId === 8 || question.questionTypeId === 9) {
      question.questionAnswerOptions = [];
    }
    this.spinner.show();
    this.isEditPreDefined = true;
    question.index = i;
    let questionAnswerOptions: FormArray = this.editQuesForm.get('questionAnswerOptions') as FormArray;
    questionAnswerOptions.controls = [];
    this.editQuesForm.patchValue(question);
    question.questionAnswerOptions.forEach((ques, i) => {
      questionAnswerOptions.push(this.createQuesAns());
      this.editQuesForm.controls.questionAnswerOptions['controls'][i].setValue({
        questionAnswerId: ques.questionAnswerId,
        questionAnswer: ques.questionAnswer
      });
    });
    setInterval(() => {
      this.spinner.hide();
    }, 300);
  }

  delPreDefinedQuestion(i) {
    this.spinner.show();
    this.selectedQuestions.splice(i, 1);
    this.editQuesForm.reset();
    this.isEditPreDefined = false;
    setInterval(() => {
      this.spinner.hide();
    }, 300);
    this.toastr.success('Question has been deleted successfully from this questionnaire.');
  }

  updateSelectedQues() {
    this.editQuesForm.markAllAsTouched();
    if (this.editQuesForm.valid) {
      if (this.editQuesForm.value.isQuesImg && !this.editQuesForm.value.questionImageName) {
        return this.noImageForImgQues();
      }
      this.spinner.show();
      this.editQuesForm.patchValue({ isUpdated: true });
      this.selectedQuestions[this.editQuesForm.value.index] = this.editQuesForm.value;
      this.editQuesForm.reset();
      this.isEditPreDefined = false;
      setInterval(() => {
        this.spinner.hide();
      }, 300);
      this.toastr.success('Question has been updated successfully for this questionnaire.');
    }
    else {
      this.toastr.error('Please enter a valid question with valid options', 'Error!');
    }
  }

  removeQuesAns(formName, ansIndx, quesIndx) {
    let ansArr;
    if (formName === 'addQues') {
      ansArr = this.addQuesForm.get('questions')['controls'][quesIndx].get('questionAnswerOptions') as FormArray;
      ansArr.removeAt(ansIndx);
      this.addQuesForm.get('questions')['controls'][quesIndx].patchValue({ isUpdated: true });
    }
    else {
      ansArr = this.editQuesForm.get('questionAnswerOptions') as FormArray;
      ansArr.removeAt(ansIndx);
    }
  }

  addQuesAns(formName, quesIndx) {
    let questionAnswerOptions: FormArray;
    if (formName === 'addQues') {
      this.addQuesForm.get('questions')['controls'][quesIndx].get('questionAnswerOptions').markAllAsTouched();
      if (this.addQuesForm.get('questions')['controls'][quesIndx].get('questionAnswerOptions').valid) {
        questionAnswerOptions = this.addQuesForm.get('questions')['controls'][quesIndx].get('questionAnswerOptions') as FormArray;
        questionAnswerOptions.push(this.createQuesAns());
        if (this.addQuesForm.value.questions[quesIndx].questionTypeId == 6) {
          this.setValidator(questionAnswerOptions.at(questionAnswerOptions.length - 1).get('questionAnswer'), [Validators.maxLength(30), Validators.required]);
        }
      }
      else {
        this.toastr.error('Please add a valid option to continue', 'Error');
      }
    }
    else {
      this.editQuesForm.get('questionAnswerOptions').markAllAsTouched();
      if (this.editQuesForm.get('questionAnswerOptions').valid) {
        questionAnswerOptions = this.editQuesForm.get('questionAnswerOptions') as FormArray;
        questionAnswerOptions.push(this.createQuesAns());
      }
      else {
        this.toastr.error('Please add a valid option to continue', 'Error');
      }
    }
  }

  addQues() {
    this.addQuesForm.markAllAsTouched();
    if (this.addQuesForm.valid) {
      let quesArr = this.addQuesForm.get('questions') as FormArray;
      quesArr.push(this.createQuestion());
    }
    else {
      this.toastr.error('Please enter a valid question with valid options', 'Error');
    }
  }

  removeQues(indx) {
    let quesArr = this.addQuesForm.get('questions') as FormArray;
    quesArr.removeAt(indx);
  }

  minMaxCompare(ctrl: any) {
    if (ctrl.value.other.ceil != null && ctrl.value.other.floor != null) {
      this.setValidator(ctrl.get('other').get('ceil'), [Validators.required, Validators.min(ctrl.value.other.floor + 1), (ctrl.value.other.isContinuousScale ? Validators.max(100) : Validators.max(15))]);
    }
    else {
      this.setValidator(ctrl.get('other').get('ceil'), [Validators.required]);
    }
    this.stepValidation(ctrl);
  }

  stepValidation(ctrl: any) {
    if (ctrl.value.other.ceil != null && ctrl.value.other.floor != null && ctrl.value.other.tickStep != null) {
      this.setValidator(ctrl.get('other').get('tickStep'), [Validators.required, Validators.min(1), Validators.max(ctrl.value.other.ceil - ctrl.value.other.floor)]);
    }
    else {
      this.setValidator(ctrl.get('other').get('tickStep'), [Validators.required]);
    }
  }

  back() {
    if (!this.editFlag)
      this.router.navigate(['/user/questionnaire/add/questionnaire-instructions']);
    else
      this.router.navigate([`/user/questionnaire/edit/${this.editId}/questionnaire-instructions`]);
  }

  checkTabChange(next?) {
    this.addQuesForm.markAllAsTouched();

    if (this.addQuesForm.valid && (this.selectedQuestions.length || (this.addQuesForm.value.questions && this.addQuesForm.value.questions.length))) {
      // To make the options array as empty if text or textarea (after selecting question which is not edited)
      this.selectedQuestions.forEach((ques, i) => {
        if (ques.questionAnswerOptions.length === 1 && Object.keys(ques.questionAnswerOptions[0]).length === 0) {
          this.selectedQuestions[i].questionAnswerOptions = [];
        }
      });

      let finalQuestions = [], isAtleastOneQuesMandatory: boolean = false, isImgQuesHasImg: boolean = true;
      finalQuestions = finalQuestions.concat(...this.selectedQuestions, ...this.addQuesForm.value.questions);
      finalQuestions.forEach((ques, i) => {
        finalQuestions[i].questionType = this.questionTypes.filter(type => type.questionTypeId === ques.questionTypeId)[0].questionType;
        finalQuestions[i].question = ques.preDefinedQuestion;

        // To check whether the question with "add image" selected, has image
        if (ques.isQuesImg && !ques.questionImageName) {
          isImgQuesHasImg = false;
        }

        // To check whether at least one question is selected as mandatory
        if (ques.isMandatory)
          isAtleastOneQuesMandatory = true;
      });

      if (!isImgQuesHasImg) {
        return this.noImageForImgQues();
      }

      if (!isAtleastOneQuesMandatory) {
        this.toastr.error('Please select at least one question as mandatory');
        return false;
      }

      this.tabservice.setModelData(this.selectedQuestions, 'selectedQuestions');
      this.tabservice.setModelData(this.addQuesForm.value.questions, 'addedQuestions');
      this.tabservice.setModelData(finalQuestions, 'questions');
      return true;
    }
    else if (!this.editFlag && (next === '/user/questionnaire/add/questionnaire-instructions' || next === '/user/questionnaire/add/basic-details')) {
      return true;
    }
    else if (this.editFlag && (next === `/user/questionnaire/edit/${this.editId}/questionnaire-instructions` || next === `/user/questionnaire/edit/${this.editId}/basic-details`)) {
      return true;
    }
    else {
      return false;
    }
  }

  next() {
    if (this.checkTabChange()) {
      if (!this.editFlag)
        this.router.navigate(['/user/questionnaire/add/preview-questionnaire']);
      else
        this.router.navigate([`/user/questionnaire/edit/${this.editId}/preview-questionnaire`]);
    }
  }

  setValidator(ctrl: any, validators: any) {
    ctrl.setValidators(validators);
    ctrl.updateValueAndValidity();
  }

  clearValidator(ctrl: any) {
    ctrl.clearValidators();
    ctrl.updateValueAndValidity();
  }

  selectFileResult(event, index?: number) {
    let controls: any;
    if (index >= 0) {
      controls = this.addQuesForm.controls.questions['controls'][index];
    }
    else {
      controls = this.editQuesForm;
    }
    //isUpdated: true is used to set that particular question is updated during edit. During add this is not considered in backend
    controls.patchValue({ quesImg: '', questionImageName: '', questionImageUrl: '', isUpdated: this.editFlag });
    if (event.length == 0) {
      return false;
    }
    controls.get('quesImg').patchValue(event);
    this.uploadTemplate(index);
  }

  async uploadTemplate(index?: number) {
    let controls: any;
    if (index >= 0) {
      controls = this.addQuesForm.controls.questions['controls'][index];
    }
    else {
      controls = this.editQuesForm;
    }
    if (controls.value.quesImg && controls.value.quesImg.length == 0) {
      this.toastr.error('Please select a valid file for uploading.', 'Error!');
      return;
    }
    let formData = new FormData();
    controls.value.quesImg && controls.value.quesImg.forEach(element => {
      formData.append("file", element);
    });
    formData.append("moduleName", 'Questionnaire');
    this.spinner.show();
    this.questionnaireService.bulkUpload('/api/fileUpload/bulkUpload', formData).subscribe((res) => {
      if (res.response && res.response.length) {
        let img = controls.value.quesImg[0].name;
        controls.get('questionImageName').patchValue(res.response[0][img]);
        this.spinner.hide();
      }
      else {
        this.toastr.error("Please try after sometime or contact administrator.");
        this.spinner.hide();
      }
    },
      err => {
        if (err.status == 500) {
          this.toastr.error(err.error.message + ". " + "Please try after sometime or contact administrator.");
          this.spinner.hide();
        }
        else {
          this.toastr.error(err.error.errors[0]?.message || 'Something went wrong. Please try after sometime or contact administrator.');
          this.spinner.hide();
        }
      });
  }

  removeQuesImg(index?: number) {
    let controls: any;
    if (index >= 0) {
      controls = this.addQuesForm.controls.questions['controls'][index];
    }
    else {
      controls = this.editQuesForm;
    }
    //isUpdated: true is used to set that particular question is updated during edit. During add this is not considered in backend
    controls.patchValue({ quesImg: '', questionImageName: '', questionImageUrl: '', isUpdated: this.editFlag });
  }

  noImageForImgQues() {
    this.toastr.error('Please upload image for the question in which "Add image" is selected');
    return false;
  }

  canDeactivate(component, route, state, next) {
    if (next.url.indexOf('/auth/login') > -1) {
      return true;
    }
    if (next.url.includes("/user/questionnaire/add") || next.url.includes("/user/questionnaire/edit") || next.url.includes("/login")) {
      // if(next.url && next.url.includes("preview-questionnaire") && !(this.data && this.data.questions && this.data.questions.length)) {
      //   // this.toastr.error('Select/Add at least one question from questions tab');
      //   this.toastr.error('Please select at least one question as mandatory');
      //   return;
      // }
      return this.checkTabChange(next.url);
    }
    else {
      return this.alertService.confirm();
    }
  }
}