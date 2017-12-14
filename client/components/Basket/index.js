import React from 'react';
import { func, number } from 'prop-types';
import { BasketContainer,
  BasketProducts,
  BasketProduct,
  BasketProductImage,
  PriceAndRemove,
  BasketProductPrice,
  BasketProductRemove,
  BasketProductName,
  BasketProductQuantity,
  Total
} from './styles';
import Image from '../Image';

class Basket extends React.Component {
  render() {
    return (
      <BasketContainer>
        <BasketProducts>
          <h1>Basket</h1>
          {this.props.basket.items.map((item) => (
            <BasketProduct>
              <BasketProductImage>
                <Image image={item.product.image} />
              </BasketProductImage>
              <PriceAndRemove>
                <BasketProductPrice>
                  <span className="price">£{item.quantity * item.product.price}</span>
                </BasketProductPrice>
                <BasketProductRemove>
                  <button onClick={() => this.props.removeFromBasket(item.product)}>X</button>
                </BasketProductRemove>
              </PriceAndRemove>
              <BasketProductName>
                <p className="name">{item.product.name}</p>
              </BasketProductName>
              <BasketProductQuantity>
                <span className="quantity">Qty {item.quantity}</span>
                <span><button onClick={() => this.props.increaseQuantity(item)} className="quantity">+</button></span>
                <span><button onClick={() => this.props.decreaseQuantity(item)} className="quantity">-</button></span>
              </BasketProductQuantity>
            </BasketProduct>), this)}
          <button onClick={() => this.props.clearBasket()}>Clear Basket</button>
        </BasketProducts>
        <Total>
          <h1> Total </h1>
          <span className="label">Sub-total </span>
          <span className="amount">£{this.props.basket.total}</span>
          <button>Checkout</button>
        </Total>
      </BasketContainer>
    );
  }
}

Basket.propTypes = {
  increaseQuantity: func,
  decreaseQuantity: func,
  clearBasket: func,
  removeFromBasket: func,
  basket: {
    total: number
  }
}

export default Basket;
