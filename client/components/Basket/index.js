import { func } from 'prop-types';
import Image from 'components/Image';
import Header from 'components/Header';
import {
  BasketContainer,
  BasketProducts,
  BasketProduct,
  BasketProductImage,
  PriceAndRemove,
  BasketProductPrice,
  BasketProductRemove,
  BasketProductName,
  BasketProductQuantity,
  Total,
  EmptyBasket
} from './styles';
import OuterContainer from '../../utils/styles/outerContainer/index';

const Basket = ({
  basket,
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket
}) => (
  <OuterContainer>
    <Header />
    {basket.items.length > 0 ?
      <BasketContainer>
        <BasketProducts>
          <h1>Basket</h1>
          {basket.items.map((item) => (
            <BasketProduct>
              <BasketProductImage>
                <Image image={item.product.image} className="basketItemImage" />
              </BasketProductImage>
              <PriceAndRemove>
                <BasketProductPrice>
                  <span className="basketItemPrice">£{item.product.price}</span>
                </BasketProductPrice>
                <BasketProductRemove>
                  <button onClick={() => removeFromBasket(item.product)}>X</button>
                </BasketProductRemove>
              </PriceAndRemove>
              <BasketProductName>
                <p className="basketItemName">{item.product.name}</p>
              </BasketProductName>
              <BasketProductQuantity>
                <span className="basketItemQuantity">Qty {item.quantity}</span>
                <span><button onClick={() => increaseQuantity(item)} className="quantityIncrease">+</button></span>
                <span><button onClick={() => decreaseQuantity(item)} className="quantityDecrease">-</button></span>
              </BasketProductQuantity>
            </BasketProduct>), this)}
          <button onClick={() => clearBasket()}>Clear Basket</button>
        </BasketProducts>
        <Total>
          <h1> Total </h1>
          <span className="label"> Sub-total </span>
          <span className="amount">£{basket.total}</span>
          <button>Checkout</button>
        </Total>
      </BasketContainer>
    :
      <EmptyBasket>
        {'Your basket is empty'}
      </EmptyBasket>
  }
  </OuterContainer>
);

Basket.propTypes = {
  increaseQuantity: func,
  decreaseQuantity: func,
  clearBasket: func,
  removeFromBasket: func
};

Basket.defaultProps = {
  increaseQuantity: null,
  decreaseQuantity: null,
  clearBasket: null,
  removeFromBasket: null
};

export default Basket;
