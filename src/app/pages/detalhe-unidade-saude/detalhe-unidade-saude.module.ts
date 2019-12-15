import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheUnidadeSaudePage } from './detalhe-unidade-saude.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheUnidadeSaudePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheUnidadeSaudePage]
})
export class DetalheUnidadeSaudePageModule {}
