import React from 'react';
import { array, func } from 'prop-types';
import { Container } from './styles';
import Basket from '../Basket';
import Products from '../Products';
import Filters from '../Filters';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilters: true
    };
  }

  toggleFilter = () => {
    this.setState(prevState => ({ showFilters: !prevState.showFilters }));
  }

  render() {
    const { basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity, clearBasket, products, refineSearch } = this.props;
    return (
      <Container>
        {this.state.showFilters ?
          <Filters
            refineSearch={refineSearch}
          />
        :
        null
      }
        <Products
          toggleFilter={this.toggleFilter}
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

Main.propTypes = {
  basket: array,
  removeFromBasket: func,
  increaseQuantity: func,
  decreaseQuantity: func,
  clearBasket: func,
  refineSearch: func
};

Main.defaultProps = {
  basket: [],
  removeFromBasket: null,
  increaseQuantity: null,
  decreaseQuantity: null,
  clearBasket: null,
  refineSearch: null
};
