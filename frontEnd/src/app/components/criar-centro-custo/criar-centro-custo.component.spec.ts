import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCentroCustoComponent } from './criar-centro-custo.component';

describe('CriarCentroCustoComponent', () => {
  let component: CriarCentroCustoComponent;
  let fixture: ComponentFixture<CriarCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCentroCustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
