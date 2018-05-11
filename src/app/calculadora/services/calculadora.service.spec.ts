import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 10+5 = 10',inject([CalculadoraService],(service: CalculadoraService) =>{
    let soma = service.calcular(10, 5,'+');
    expect(soma).toEqual(15);
  }))
});
