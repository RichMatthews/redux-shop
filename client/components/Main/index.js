import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import OuterContainer from 'utils/styles/outerContainer/index';
import Basket from 'components/Basket';
import Categories from 'components/Categories';
import Header from 'components/Header';
import NoMatch from 'components/NoMatch';

import {
  Container,
  Grid,
  Him,
  Her,
  HimLink,
  HerLink
} from './styles';

const HimHerComponent = () => (
  <OuterContainer>
    <Header />
    <Grid>
      <HimLink to="/him/categories"><Him className="him">Him</Him></HimLink>
      <HerLink to="/her/categories"><Her className="her">Her</Her></HerLink>
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
      <Route
        exact
        path="/"
        component={HimHerComponent}
      />
      <Route
        exact
        path="/him"
        render={() => (
          <Redirect
            to="/him/categories"
          />
        )}
      />
    </Container>
  </Router>
);

export default Main;
