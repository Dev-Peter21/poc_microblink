import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalIdPage } from './personal-id.page';
import { PersonalIdPageRoutingModule } from './personal-id-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PersonalIdPageRoutingModule
  ],
  declarations: [PersonalIdPage]
})
export class PersonalIDPageModule {}
