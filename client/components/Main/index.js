import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Container,
  Grid,
  Him,
  Her
} from './styles';
import OuterContainer from '../../utils/styles/outerContainer/index';
import Basket from '../Basket';
import Categories from '../Categories';
import Header from '../Header';

const HimHerComponent = () => (
  <OuterContainer>
    <Header />
    <Grid>
      <Link to="/him/categories"><Him className="him">Him</Him></Link>
      <Link to="/her/categories"><Her className="her">Her</Her></Link>
    </Grid>
  </OuterContainer>
);

const Main = ({ basket,
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  clearBasket,
  categories,
  refineSearch
}) => (
  <Router>
    <Container>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
            categories={categories}
            addToBasket={addToBasket}
          />
        )}
      />
      <Route path="/" exact component={HimHerComponent} />
    </Container>
  </Router>
);

export default Main;
