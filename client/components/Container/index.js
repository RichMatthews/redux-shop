import React from 'react';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket, clearBasket, increaseQuantity, decreaseQuantity } from '../actions';
import { Container } from './styles';
import Basket from '../Basket';
import Products from '../Products';

const mapStateToProps = state => ({
  basket: state.basket,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  addToBasket: (product) => {
    dispatch(addToBasket(product));
  },
  removeFromBasket: (product) => {
    dispatch(removeFromBasket(product));
  },
  increaseQuantity: (product) => {
    dispatch(increaseQuantity(product));
  },
  decreaseQuantity: (product) => {
    dispatch(decreaseQuantity(product));
  },
  clearBasket: () => {
    dispatch(clearBasket());
  }
});

class Main extends React.Component {
  render() {
    const { basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity, clearBasket, products } = this.props;
    return (
      <Container>
        <Products
          addToBasket={addToBasket}
          products={products}
        />
        <Basket
          basket={basket}
          removeFromBasket={removeFromBasket}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearBasket={clearBasket}
        />
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
