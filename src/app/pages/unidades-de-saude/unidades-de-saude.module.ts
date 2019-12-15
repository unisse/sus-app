import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnidadesDeSaudePage } from './unidades-de-saude.page';
import {ItemUnidadeSaudeComponent} from './components/item-unidade-saude/item-unidade-saude.component';

const routes: Routes = [
  {
    path: '',
    component: UnidadesDeSaudePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadesDeSaudePage, ItemUnidadeSaudeComponent]
})
export class UnidadesDeSaudePageModule {}
