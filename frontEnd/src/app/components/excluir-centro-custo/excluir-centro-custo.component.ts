import { Component, OnInit } from '@angular/core';
import { CentroCusto } from 'src/app/interface/centroCusto';

@Component({
  selector: 'app-excluir-centro-custo',
  templateUrl: './excluir-centro-custo.component.html',
  styleUrls: ['./excluir-centro-custo.component.css']
})
export class ExcluirCentroCustoComponent implements OnInit {

  centroCusto: CentroCusto = {
    id: 0,
    codigo: 0,
    nome: '',
    dataInicial: new Date(),
    dataFinal: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
