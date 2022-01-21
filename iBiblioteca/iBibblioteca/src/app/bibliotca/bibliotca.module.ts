import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotcaPageRoutingModule } from './bibliotca-routing.module';

import { BibliotcaPage } from './bibliotca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotcaPageRoutingModule
  ],
  declarations: [BibliotcaPage]
})
export class BibliotcaPageModule {}
