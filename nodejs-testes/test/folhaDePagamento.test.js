/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes dos cáluclos de folha', () => {
  it('Deve retornar horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve descontar valor salário', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    expect(retornado).toBe(esperado);
  });
});
