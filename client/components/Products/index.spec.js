import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Products from './index';
import {  } from './styles';

describe.only('product', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Products products={products}/>);
  });
  it('renders a product', () => {

  });
  it('renders a product image', () => {

  });
  it('renders a product name', () => {

  });
  it('renders a product price', () => {

  });
  it('renders an add to basket button', () => {

  });
  it('calls add to basket when clicked', () => {

  });
});
