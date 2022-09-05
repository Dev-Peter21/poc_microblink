import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalIdPage } from './personal-id.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalIdPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalIdPageRoutingModule {}
