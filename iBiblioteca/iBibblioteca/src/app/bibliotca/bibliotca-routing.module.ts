import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotcaPage } from './bibliotca.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotcaPageRoutingModule {}
