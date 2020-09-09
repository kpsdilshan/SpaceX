import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestLounchComponent } from './lounch/latest-lounch/latest-lounch.component';
import { AllLounchesComponent } from './lounch/all-lounches/all-lounches.component';

const routes: Routes = [
  {path: '', component: LatestLounchComponent},
  {path: 'all-the-lounches', component: AllLounchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
