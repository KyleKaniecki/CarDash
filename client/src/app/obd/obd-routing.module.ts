import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainObdComponent } from './components/pages/main-obd/main-obd.component';

const routes: Routes = [
  {
    path: '',
    component: MainObdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObdRoutingModule { }
