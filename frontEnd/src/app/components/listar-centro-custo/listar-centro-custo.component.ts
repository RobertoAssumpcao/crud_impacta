import { CentroCustoService } from './../../services/centro-custo.service';
import { CentroCusto } from './../../interface/centroCusto';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-centro-custo',
  templateUrl: './listar-centro-custo.component.html',
  styleUrls: ['./listar-centro-custo.component.css']
})
export class ListarCentroCustoComponent implements OnInit {

  listacentroCusto: CentroCusto[] = [];

  constructor(private service: CentroCustoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaCentroCusto) => {
      this.listacentroCusto = listaCentroCusto;
    })
  }

}
