import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProGradsComponent } from './pro-grads/pro-grads.component';

const routes: Routes = [{ path: 'prograds', component: ProGradsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
