import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ObdRoutingModule } from './obd-routing.module';
import { ObdCardComponent } from './components/elements/obd-card/obd-card.component';
import { BaseModule } from '../base/base.module';
import { MainObdComponent } from './components/pages/main-obd/main-obd.component';
import { NgxsModule } from '@ngxs/store';
import { ObdState } from './state/obd.state';

@NgModule({
  imports: [
    CommonModule,
    ObdRoutingModule,
    NgxsModule.forFeature([
      ObdState
    ]),
    BaseModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ObdCardComponent, MainObdComponent],
  exports: [
    ObdCardComponent
  ]
})
export class ObdModule { }
