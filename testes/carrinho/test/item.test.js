/* eslint-disable no-undef */
import Item from '../item';

describe('Teste dos itens', () => {
  it('Deve ter 3 campos: Nome, Valor e Quantidade', () => {
    const item = new Item('Maçã', 2.5, 10);

    expect(item.nome).toBe('Maçã');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 0.1, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
  });
});
