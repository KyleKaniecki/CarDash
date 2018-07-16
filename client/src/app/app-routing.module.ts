import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasePageComponent } from './base/components/pages/base-page/base-page.component';
import { HomePageComponent } from './base/components/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'obd',
        loadChildren: './obd/obd.module#ObdModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
