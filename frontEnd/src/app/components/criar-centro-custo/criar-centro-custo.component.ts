import { CentroCusto } from './../../interface/centroCusto';
import { CentroCustoService } from './../../services/centro-custo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-centro-custo',
  templateUrl: './criar-centro-custo.component.html',
  styleUrls: ['./criar-centro-custo.component.css']
})
export class CriarCentroCustoComponent implements OnInit {

  centroCusto: CentroCusto = {

    codigo: 0,
    nome: '',
    dataInicial: new Date(),
    dataFinal: new Date()
  }

  constructor(private service: CentroCustoService, private router: Router) {
  }

  ngOnInit(): void {
  }

  criarCentruCusto() {
    this.service.criar(this.centroCusto).subscribe(() => {
      this.router.navigate(['/listaCentroCustos'])
    })
  }

  cancelar() {
    this.router.navigate(['/listaCentroCustos'])
  }
}
