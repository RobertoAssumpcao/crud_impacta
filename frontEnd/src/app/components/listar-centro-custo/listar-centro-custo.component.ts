import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-centro-custo',
  templateUrl: './listar-centro-custo.component.html',
  styleUrls: ['./listar-centro-custo.component.css']
})
export class ListarCentroCustoComponent implements OnInit {

  listacentroCusto = [
  {
    codigo: 1,
    nome: '3000',
    dataInicial: '20/02/32',
    dataFim: '20/02/32'
  },
  {
    codigo: 2,
    nome: '2000',
    dataInicial: '20/02/32',
    dataFim: '20/02/32'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
