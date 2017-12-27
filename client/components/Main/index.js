import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Container, Grid, Him, Her } from './styles';
import Basket from '../Basket';
import Categories from '../Categories';

const HimHerComponent = () => (
  <Grid>
    <Him className="him"><Link to="/him/categories">Him</Link></Him>
    <Her className="her"><Link to="/her">Her</Link></Her>
  </Grid>
);

const Main = ({ basket,
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket,
  products,
  refineSearch
}) => (
  <Router>
    <Container>
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

      <Route
        path="/him"
        render={() => (
          <Categories
            products={products}
            addToBasket={addToBasket}
          />
        )}
      />
      <Route path="/" exact component={HimHerComponent} />
    </Container>
  </Router>
);

export default Main;
