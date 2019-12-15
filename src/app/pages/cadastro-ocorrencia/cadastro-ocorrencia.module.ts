import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroOcorrenciaPage } from './cadastro-ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroOcorrenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroOcorrenciaPage]
})
export class CadastroOcorrenciaPageModule {}
