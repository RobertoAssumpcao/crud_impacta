import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCentroCustoComponent } from './components/criar-centro-custo/criar-centro-custo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListarCentroCustoComponent } from './components/listar-centro-custo/listar-centro-custo.component';
import { ExcluirCentroCustoComponent } from './components/excluir-centro-custo/excluir-centro-custo.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarCentroCustoComponent,
    ListarCentroCustoComponent,
    ExcluirCentroCustoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
