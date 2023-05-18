import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppRoutingModule } from './mobile-app-routing.module';
import { MobileAppFeedbackComponent } from './components/mobile-app-feedback/mobile-app-feedback.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SharedModule } from '../shared/shared.module';
import { TimerComponent } from './components/timer/timer.component';


@NgModule({
  declarations: [MobileAppFeedbackComponent, OnboardingComponent, TimerComponent],
  imports: [
    CommonModule,
    MobileAppRoutingModule,
    SharedModule
  ]
})
export class MobileAppModule { }
