import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentroCusto } from 'src/app/interface/centroCusto';
import { CentroCustoService } from 'src/app/services/centro-custo.service';

@Component({
  selector: 'app-excluir-centro-custo',
  templateUrl: './excluir-centro-custo.component.html',
  styleUrls: ['./excluir-centro-custo.component.css'],
})
export class ExcluirCentroCustoComponent implements OnInit {
  centroCusto: CentroCusto = {
    id: 0,
    codigo: 0,
    nome: '',
    dataInicial: new Date(),
    dataFinal: new Date(),
  };

  constructor(
    private service: CentroCustoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((centroCusto) => {
      this.centroCusto = centroCusto;
    });
  }

  excluirCentroCusto() {
    if (this.centroCusto.id) {
      this.service.excluir(this.centroCusto.id).subscribe(() => {
        this.router.navigate(['/listaCentroCustos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listaCentroCustos']);
  }
}
