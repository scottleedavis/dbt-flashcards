import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPage } from '../cards/card.page';

const routes: Routes = [
  {
    path: '',
    component: CardPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPageRoutingModule {}
