import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Basket from './index';
import { BasketProduct, BasketProducts, BasketProductRemove } from './styles';

describe('Basket', () => {
  let wrapper;
  let basket;
  beforeEach(() => {
    basket = {
      items: []
    };
  });
  describe('Main functionality', () => {
    it('should render a basket', () => {
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper).to.have.length(1);
    });
    it('should render a basket with 3 items', () => {
      basket = {
        items: [{
          product: {
            image: ''
          }
        },
        {
          product: {
            image: ''
          }
        },
        {
          product: {
            image: ''
          }
        }]
      };
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper.find(BasketProduct)).to.have.length(3);
    });
  });
  describe('quantity', () => {
    describe('increase', () => {
      it('renders a quantity increase button if more than 0 products', () => {
        basket = {
          items: [{ product: { image: '' }, quantity: 1 }]
        };
        wrapper = shallow(<Basket basket={basket} />);
        expect(wrapper.find('.quantityIncrease').exists()).to.equal(true);
      });
      it('does not render a quantity increase button if less than 1 product', () => {
        basket = {
          items: []
        };
        wrapper = shallow(<Basket basket={basket} />);
        expect(wrapper.find('.quantityIncrease').exists()).to.equal(false);
      });
    });
    describe('decrease', () => {
      it('renders a quantity decrease button if more than 0 products', () => {
        basket = {
          items: [{ product: { image: '' }, quantity: 1 }]
        };
        wrapper = shallow(<Basket basket={basket} />);
        expect(wrapper.find('.quantityDecrease').exists()).to.equal(true);
      });
      it('does not render a quantity decrease button if less than 1 product', () => {
        basket = {
          items: []
        };
        wrapper = shallow(<Basket basket={basket} />);
        expect(wrapper.find('.quantityDecrease').exists()).to.equal(false);
      });
      it('calls .removeFromBasket with product when quantity decrease clicked', () => {
        const removeFromBasketSpy = sinon.spy();
        basket = {
          items: [{ product: { image: '' }, quantity: 1 }]
        };
        wrapper = shallow(<Basket basket={basket} removeFromBasket={removeFromBasketSpy} />);
        wrapper.find(BasketProductRemove).find('button').simulate('click');
        expect(removeFromBasketSpy.called).to.equal(true);
      });
    });
  });
  describe('rendering an image', () => {
    it('renders the image of an item in the basket', () => {
      basket = {
        items: [{ product: { image: '' }, quantity: 1 }]
      };
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper.find('.basketItemImage').exists()).to.equal(true);
    });
  });
  describe('rendering the price', () => {
    it('renders the price of an item in the basket', () => {
      basket = {
        items: [{ product: { image: '' }, quantity: 1 }]
      };
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper.find('.basketItemPrice').exists()).to.equal(true);
    });
  });
  describe('rendering the name', () => {
    it('renders the name of an item in the basket', () => {
      basket = {
        items: [{ product: { image: '' }, quantity: 1 }]
      };
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper.find('.basketItemName').exists()).to.equal(true);
    });
  });
  describe('clearing the basket', () => {
    it('renders a clear basket button', () => {
      wrapper = shallow(<Basket basket={basket} />);
      expect(wrapper.find('button').exists()).to.equal(true);
    });
    it('calls .clearBasket when clear basket clicked', () => {
      const clearBasketSpy = sinon.spy();
      basket = {
        items: [{ product: { image: '' }, quantity: 1 }]
      };
      wrapper = shallow(<Basket basket={basket} clearBasket={clearBasketSpy} />);
      wrapper.find(BasketProducts).find('button').last().simulate('click');
      expect(clearBasketSpy.called).to.equal(true);
    });
  });
});
