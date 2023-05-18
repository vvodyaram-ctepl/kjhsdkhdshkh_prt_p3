import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabserviceService } from 'src/app/shared/tabservice.service';
import { PetService } from '../../pet.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomDateFormatPipe } from 'src/app/pipes/custom-date-format.pipe';
import { AlertService } from 'src/app/components/alert-modal/alert.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pet-review',
  templateUrl: './pet-review.component.html',
  styleUrls: ['./pet-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PetReviewComponent implements OnInit {
  data: any;
  editFlag: boolean = false;
  editId: any;
  petReviewArr: any;
  submitFlag: boolean = false;
  studyArr: any = [];
  statusArr: any = [];
  petDetails: any = [];
  newArr: any = [];
  queryParams: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tabservice: TabserviceService,
    private petservice: PetService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private customDatepipe: CustomDateFormatPipe,
    private alertService: AlertService
  ) { }

  async ngOnInit() {
    this.getPetStatuses();
    this.route.queryParams.subscribe((obj: any) => {
      this.queryParams = obj;
    })

    let str = this.router.url;
    if (this.router.url.indexOf('/edit-patient') > -1) {
      let id = str.split("edit-patient/")[1].split("/")[0];
      this.editFlag = true;
      this.editId = id;
    }

    let resp = this.tabservice.getModelData() ? this.tabservice.getModelData() : {};
    if (!resp || (resp && !resp.petInfo)) {
      if (!this.editFlag)
        this.router.navigate(['/user/patients/add-patient/pet-info'], { queryParams: this.queryParams });
      else
        this.router.navigate([`/user/patients/edit-patient/${this.editId}/pet-info`], { queryParams: this.queryParams });
      return;
    }

    this.tabservice.dataModel$.subscribe(res => {
      this.data = res ? res : '';

      if (this.data) {
        this.data.petParentInfo = (this.data.petExistingArr ? this.data.petExistingArr : []).concat(this.data.petNewArr ? this.data.petNewArr : []);
      }
    });

    await this.getStudy();
    this.petDetails = this.data?.petStudy?.arr;
    this.petDetails?.forEach((ele1, i) => {
      this.studyArr.forEach((ele2, j) => {
        if (ele1.studyName.studyId == ele2.studyId) {
          this.newArr.push({
            'studyName': ele1.studyName.studyName,
            'studyassDate': ele1.studyassDate,
            'studyDescription': ele2.studyDescription,
            'externalPetValue': ele1.externalPet.externalPetValue
          })
        }
      });
    });

  }

  getPetStatuses() {
    this.petservice.getPet('/api/lookup/getPetStatuses', '').subscribe(res => {
      this.statusArr = res.response.petStatuses;
      this.spinner.hide();
    },
      err => {
        this.spinner.hide();
        this.toastr.error('Something went wrong. Please try after sometime or contact administrator.');
      }
    );
  }

  getStatusName(statusId) {
    return this.statusArr.filter((statuses: any) => statuses.petStatusId == statusId)[0]?.statusName;
  }

  private async getStudy() {
    this.spinner.show();
    let res: any = await (
      this.petservice.getPet('/api/study/getStudyList', '').pipe(
        catchError(err => {
          this.toastr.error(err.error.errors[0]?.message || 'Something went wrong. Please try after sometime or contact administrator.!');
          return of(false);
        })
      )
    ).toPromise();
    if (res.status.success === true) {
      this.studyArr = res.response.studyList;
      this.spinner.hide();
    }
  }

  back() {

    if (!this.editFlag) {
      this.router.navigate(['/user/patients/add-patient/pet-parent-info'], { queryParams: this.queryParams });
    }
    else {
      this.router.navigate([`/user/patients/edit-patient/${this.editId}/pet-parent-info`], { queryParams: this.queryParams });
    }
  }
  submit() {
    let res = Object.assign({});

    let data = this.tabservice.getModelData() ? this.tabservice.getModelData() : {};
    if (!(data.hasOwnProperty('petInfo'))) {
      this.toastr.error("Please select all mandatory fields in Pet Info tab");
      return;
    }
    if (!(data.hasOwnProperty('petStudy')) && data.petInfo.status == 2) {
      this.toastr.error("Pet cannot be marked as On-Study without associating a study.");
      return;
    }
    if (data.hasOwnProperty('petInfo') && data.petInfo.isPetWithPetParent && data.petParentInfo.length == 0) {
      this.toastr.error("Pet address cannot be same as pet parent address, as there are no pet parents added. Please add either pet parent or pet address");
      return;
    }
    this.submitFlag = true;

    /* Pet Info starts */
    if (this.editFlag) {
      res["petId"] = this.editId;
    }
    res["petName"] = data.petInfo.petName;
    res["petImage"] = data.petInfo.petImageFileName ? data.petInfo.petImageFileName : '';
    res["breedId"] = data.petInfo.breed.breedId;
    res["breedName"] = data.petInfo.breed.breedName;
    res["gender"] = data.petInfo.gender;
    res["weight"] = data.petInfo.weight;
    res["weightUnit"] = data.petInfo.weightUnits;
    res["dateOfBirth"] = this.customDatepipe.transform(data.petInfo.dateofBirth, 'yyyy-MM-dd');
    res["isDobUnknown"] = data.petInfo.isDobUnknown;
    res["dateOfDeath"] = this.customDatepipe.transform(data.petInfo.dateOfDeath, 'yyyy-MM-dd');
    res["isApproximateDateOfDeath"] = data.petInfo.isApproximateDateOfDeath;
    res["lostToFollowUpDate"] = this.customDatepipe.transform(data.petInfo.lostToFollowUpDate, 'yyyy-MM-dd');
    res["isApproxLostToFollowUpDate"] = data.petInfo.isApproxLostToFollowUpDate;
    res["isNeutered"] = data.petInfo.category == 'Neutered' ? true : false;

    res["petImageUrl"] = data.petInfo.petImageUrl ? data.petInfo.petImageUrl : '';
    res["isPetWithPetParent"] = data.petInfo.isPetWithPetParent ? 1 : 0;
    res["petAddress"] = data.petInfo.petAddress;
    /* Pet Info ends */

    /* Pet Asset starts */
    let petDevicesArr = [];
    data.petDevices && data.petDevices.arr && data.petDevices.arr.forEach(ele => {
      petDevicesArr.push({
        allocatedOn: ele.allocatedOn ? this.customDatepipe.transform(ele.allocatedOn, 'yyyy-MM-dd HH:mm:ss') : '',
        deviceId: ele.deviceNumber.deviceId,
        deviceNumber: ele.deviceNumber.deviceNumber,
      });
    });
    res["petDevices"] = petDevicesArr;
    /* Pet Asset ends */

    /* Data Streams starts */
    let petStudyDevicesArr = [];

    data.petStudyDevices && data.petStudyDevices.arr && data.petStudyDevices.arr.forEach(ele => {
      if (ele.study != '') {
        petStudyDevicesArr.push({
          "studyId": ele.study,
          //    "studyDescription":ele.studyDesc,
          "studyName": ele.studyName ? ele.studyName : '',
          "deviceId": ele.deviceNumber ? ele.deviceNumber.deviceId : '',
          "deviceNumber": ele.deviceNumber ? ele.deviceNumber.deviceNumber : '',
          "assignedOn": ele.assignedOn ? this.customDatepipe.transform(ele.assignedOn, 'yyyy-MM-dd') : '',
          "assignedOnDate": ele.assignedOn ? this.customDatepipe.transform(ele.assignedOn, 'yyyy-MM-dd HH:mm:ss') : '',
          "externalPetInfoId": ele.externalPetInfoId ? ele.externalPetInfoId : '',
          "externalPetValue": ele.externalPetValue ? ele.externalPetValue : '',
          "studyAssignedOnDate": ele.studyAssignedOn ? this.customDatepipe.transform(ele.studyAssignedOn, 'yyyy-MM-dd HH:mm:ss') : '',
        })
      }

    });

    // filter array
    let b1 = [];
    if (data.petStudy && data.petStudy.arr) {
      b1 = data.petStudy.arr
    }
    let b2 = petStudyDevicesArr;
    let response = b1.filter(res =>
      !b2.some(ele => (ele.studyId == res.studyName.studyId)))

    response.forEach(res => {
      petStudyDevicesArr.push({
        "studyId": res.studyName.studyId,
        "studyName": res.studyName.studyName ? res.studyName.studyName : '',
        "externalPetInfoId": res.externalPet.externalPetId ? res.externalPet.externalPetId : '',
        "externalPetValue": res.externalPet.externalPetValue ? res.externalPet.externalPetValue : '',
        "studyAssignedOnDate": res.studyassDate ? this.customDatepipe.transform(res.studyassDate, 'yyyy-MM-dd HH:mm:ss') : '',
      })
    });
    res["petStudyDevices"] = petStudyDevicesArr;
    /* Data Streams ends */

    /* Pet Parent starts */
    let petParentsArr = [];
    data.petParentInfo && data.petParentInfo.forEach(ele => {
      petParentsArr.push({
        "petParentId": ele.ppId,
        "petParentName": ele.petParentFirstName + ' ' + ele.petParentLastName,
        'petParentFirstName': ele.petParentFirstName,
        'petParentLastName': ele.petParentLastName,
        "email": ele.ppEmail,
        "phoneNumber": (ele.phoneNumberCode ? ele.phoneNumberCode : '') + ele.phoneNumberValue,
        "secondaryEmail": ele.secondaryEmail,
        "isNotifySecondaryEmail": ele.isNotifySecondaryEmail,
        //During edit we get address as string instead of object. Convert the string to object when sending request
        "residentialAddress": (typeof (ele.residentialAddress) == 'string') ? {} : ele.residentialAddress,
        "shippingAddress": (typeof (ele.shippingAddress) == 'string') ? {} : ele.shippingAddress,
        "isShipAddrSameAsResdntlAddr": ele.isShipAddrSameAsResdntlAddr
      })
    });

    res["petParents"] = petParentsArr;
    /* Pet Parent ends */

    if (!this.editFlag && data.hasOwnProperty('petStudy')) {
      data.petInfo.status = '2';
    }

    if (this.editFlag) {
      res["petUnAssignAssets"] = data.petStudyDevices ? data.petStudyDevices.removedAssetIds : [];

      if (data.removedPetParents && data.removedPetParents.length > 0) {
        res["removedPetParents"] = data.removedPetParents.toString();
      }
      if (data.hasOwnProperty('petStudy') && data.petInfo.petPreviousStatus == data.petInfo.status) {
        data.petInfo.status = '2';
      }
      if ((data.hasOwnProperty('petStudy')) && (data.petInfo.status == '3' || data.petInfo.status == '1' || data.petInfo.status == '4')) {
        res["confirmOffStudy"] = true;
      }
      else {
        res["confirmOffStudy"] = false;
      }
    }

    res["petStatusId"] = data.petInfo.status ? data.petInfo.status : '';

    if (!this.editFlag) {
      this.spinner.show();
      this.petservice.addPet('/api/pets/', res).subscribe(res => {
        if (res.status.success === true) {
          this.toastr.success('Pet added successfully!');
          this.spinner.hide();
          this.tabservice.clearDataModel();
          this.router.navigate(['/user/patients'], { queryParams: this.queryParams });
        }
        else {
          this.toastr.error(res.errors[0].message);
          this.spinner.hide();
        }
      }, err => {
        console.log(err);
        this.errorMsg(err);
      });
    }
    else {
      this.spinner.show();
      this.petservice.updatePet('/api/pets/', res).subscribe(res => {
        if (res.status.success === true) {
          this.toastr.success('Pet updated successfully!');
          this.spinner.hide();
          this.tabservice.clearDataModel();
          this.router.navigate(['/user/patients'], { queryParams: this.queryParams });
        }
        else {
          this.toastr.error(res.errors[0].message);
          this.spinner.hide();
        }
      }, err => {
        console.log(err);
        this.errorMsg(err);
      });

    }
  }

  errorMsg(err) {
    if (err.status == 500) {
      this.toastr.error(err.error.message + ". " + "Please try after sometime or contact administrator.");
    }
    else {
      this.toastr.error(err.error.errors[0]?.message || 'Something went wrong. Please try after sometime or contact administrator.');
    }
    this.spinner.hide();
  }

  canDeactivate(component, route, state, next) {
    if (next.url.indexOf('/auth/login') > -1) {
      return true;
    }
    if (next.url.indexOf('/user/patients') > -1 && this.submitFlag) {
      return true;
    }
    else if (next.url.indexOf('/add-patient') > -1 || next.url.indexOf('/edit-patient') > -1) {
      return true;
    }
    else {
      return this.alertService.confirm();
    }
  }
}
