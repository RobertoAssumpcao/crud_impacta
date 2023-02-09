import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCentroCustoComponent } from './listar-centro-custo.component';

describe('ListarCentroCustoComponent', () => {
  let component: ListarCentroCustoComponent;
  let fixture: ComponentFixture<ListarCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCentroCustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
