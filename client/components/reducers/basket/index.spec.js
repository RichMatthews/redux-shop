import reducer from './index';
import { expect } from 'chai';

describe('Basket Reducer', () => {
  it('returns current state when there is an unknown action', () => {
    const action = { type: 'UNKOWN_ACTION' };
    const currentState = {};
    const result = reducer(currentState, action);
    expect(result).to.equal(currentState);
  });

  describe('ADD_TO_BASKET', () => {
    it('adds a product to the basket', () => {
      const action = { type: 'ADD_TO_BASKET' };
      const expectedState = { items: [], total: 0 };
      const result = reducer(expectedState, action);
      expect(result.items.length).to.equal(1);
    });

    // how to mock my basket
    it('adds a particular product to the basket', () => {
      const items = [
        { name: 'Rucksack', id: 1, price: 15 }
      ];
      const action = { type: 'ADD_TO_BASKET', items };
      const expectedState = { items: [], total: 0 };
      const result = reducer({}, action);
      expect(result).to.deep.equal({
        expectedState: 1
      });
    });
  });
});
