import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './nav-routing.module';

import { NavPage } from './nav.page';
import { Tab2PageModule } from '../cards/card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Tab2PageModule
  ],
  declarations: [NavPage]
})
export class TabsPageModule {}
