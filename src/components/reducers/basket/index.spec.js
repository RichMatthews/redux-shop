import reducer from './index';
import { expect } from 'chai';

describe('Basket Reducer', () => {
  it('returns current state when there is an unknown action', () => {
    const action = { type: "UNKOWN_ACTION" };
    const currentState = {};
    const result = reducer(currentState, action);
    expect(result).to.equal(currentState);
  });

  describe('ADD_TO_BASKET', () => {
    it('adds a product to the basket', () => {
      const action = { type: "ADD_TO_BASKET"};
      const expectedState = {};
      const result = reducer(expectedState, action);
      expect(result).to.equal(expectedState)
    });
  })

})
