import { CentroCusto } from './../../interface/centroCusto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-centro-custo',
  templateUrl: './listar-centro-custo.component.html',
  styleUrls: ['./listar-centro-custo.component.css']
})
export class ListarCentroCustoComponent implements OnInit {

  listacentroCusto: CentroCusto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
