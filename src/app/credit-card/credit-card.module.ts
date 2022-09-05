import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditCardPage } from './credit-card.page';

import { CreditCardPageRoutingModule } from './credit-card-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CreditCardPageRoutingModule
  ],
  declarations: [CreditCardPage]
})
export class CreditCardPageModule {}
