import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Basket from './index';

describe.only('Basket', () => {
  let wrapper;
  let basket;
  beforeEach(() => {
    basket = {
      items: []
    };
    wrapper = shallow(<Basket basket={basket} />);
  });
  it('should render a basket', () => {
    expect(wrapper).to.have.length(1);
  });
  it('should render a basket with 3 items', () => {
    basket = {
      items: [{ itemOne: 1 }, { itemTwo: 2 }, { itemThree: 3 }]
    };
    expect(basket.items).to.have.length(3);
  });
  describe('quantity', () => {
    describe('increase', () => {
      it('renders a quantity increase button if more than 0 products', () => {
        basket = {
          items: [{ itemOne: 1 }]
        };
        expect(wrapper.find('.quantityIncrease').exists()).to.equal(true);
      });
      it('does not render a quantity increase button if less than 1 product', () => {
        expect(wrapper.find('.quantityIncrease').exists()).to.equal(false);
      });
      xit('increases the quantity when clicked', () => {
        wrapper.setProps({ basket: { items: [{ itemOne: 1 }] } });
        expect(wrapper.find('.quantitiy').innerHTML).to.equal(1);
      });
    });
    describe('decrease', () => {
      it('renders a quantity decrease button if more than 0 products', () => {

      });
      it('does not render a quantity decrease button if less than 1 product', () => {

      });
      it('decreases the quantity when clicked', () => {

      });
    });
  });
  describe('price', () => {
    it('renders the price of an item', () => {

    });
  });
  describe('name', () => {
    it('renders the name of an item', () => {

    });
  });
  describe('clear basket', () => {
    it('renders a clear basket button', () => {

    });
    it('clears the basket when clicked', () => {

    });
  });
});
