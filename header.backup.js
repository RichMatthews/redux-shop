import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { Container,
  HeaderItems,
  HeaderItem,
  HeaderItemLink
} from './styles';
import Basket from '../Basket';
import Main from '../Main';

const component = ({ basket,
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket
}) => (
  <Container>
    <HeaderItems>
      <HeaderItem><HeaderItemLink to="/">Home</HeaderItemLink></HeaderItem>
      <HeaderItem>Men</HeaderItem>
      <HeaderItem>Women</HeaderItem>
      <HeaderItem>Search</HeaderItem>
      <HeaderItem><HeaderItemLink to="/basket">Basket</HeaderItemLink></HeaderItem>
    </HeaderItems>
    <Switch>
      <Route
        path="/basket"
        render={() => (
          <Basket
            basket={basket}
            removeFromBasket={removeFromBasket}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearBasket={clearBasket}
          />
        )}
      />
    </Switch>
  </Container>
);

export default component;
