import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObdModule } from './obd/obd.module';
import { BaseModule } from './base/base.module';
import { NgxsModule } from '@ngxs/store';
import { ObdState } from './obd/state/obd.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BaseModule,
    ObdModule,
    NgxsModule.forRoot([
      ObdState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
