import { ListarCentroCustoComponent } from './components/listar-centro-custo/listar-centro-custo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCentroCustoComponent } from './components/criar-centro-custo/criar-centro-custo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaCentroCustos',
    pathMatch: 'full'
  },
  {
    path: 'criarCentroCusto',
    component: CriarCentroCustoComponent
  },
  {
    path: 'listaCentroCustos',
    component: ListarCentroCustoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
