import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'mapa', loadChildren: './pages/mapa/mapa.module#MapaPageModule' },
  { path: 'unidades-de-saude', loadChildren: './pages/unidades-de-saude/unidades-de-saude.module#UnidadesDeSaudePageModule' },
  {
    path: 'detalhe-unidade-saude/:id',
    loadChildren: './pages/detalhe-unidade-saude/detalhe-unidade-saude.module#DetalheUnidadeSaudePageModule'
  },
  { path: 'cadastro-ocorrencia', loadChildren: './pages/cadastro-ocorrencia/cadastro-ocorrencia.module#CadastroOcorrenciaPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
