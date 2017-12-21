import { expect } from 'chai';
import reducer from './index';

describe('Basket Reducer', () => {
  it('returns current state when there is an unknown action', () => {
    const action = { type: 'UNKOWN_ACTION' };
    const currentState = {};
    const result = reducer(currentState, action);
    expect(result).to.equal(currentState);
  });

  describe('ADD_TO_BASKET', () => {
    it('adds a product to the basket', () => {
      const fakeProduct = { name: 'Trainers', id: 1, price: 100 };
      const action = { type: 'ADD_TO_BASKET', data: fakeProduct };
      const currentState = { items: [], total: 0 };
      const result = reducer(currentState, action);
      expect(result.items.length).to.equal(1);
    });

    // how to mock my basket
    it('adds a particular product to the basket', () => {
      const basketItems = [{
        name: 'Trainers', id: 1, price: 100
      }];
      const action = { type: 'ADD_TO_BASKET', data: basketItems };
      const currentState = { items: [], total: 0 };
      const result = reducer(currentState, action);
      expect(result.items.length).to.equal(1);
    });
  });
});
