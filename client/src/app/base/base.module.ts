import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { BaseRoutingModule } from './base-routing.module';
import { BasePageComponent } from './components/pages/base-page/base-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SideNavComponent } from './components/elements/side-nav/side-nav.component';
import { NavBarComponent } from './components/elements/nav-bar/nav-bar.component';
import { CamelToTitleCasePipe } from './pipes/camel-to-title-case.pipe';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    BasePageComponent,
    HomePageComponent,
    SideNavComponent,
    NavBarComponent,
    CamelToTitleCasePipe
  ],
  exports: [
    BasePageComponent,
    HomePageComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    CamelToTitleCasePipe
  ]
})
export class BaseModule { }
