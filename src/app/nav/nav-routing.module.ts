import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavPage } from './nav.page';
import { CardPage } from '../cards/card.page';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   component: NavPage,
  //   children: [
  //     {
  //       path: 'tab2',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () =>
  //             import('../cards/card.module').then(m => m.Tab2PageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/tab2',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  {
    path: '',
    pathMatch: 'full',
    component: CardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
