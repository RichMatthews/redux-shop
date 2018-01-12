import { func } from 'prop-types';
import {
  Route,
  Switch
} from 'react-router-dom';

import OuterContainer from 'utils/styles/outerContainer/index';
import Header from 'components/Header';
import Products from 'components/Products';
import Image from 'components/Image';
import NoMatch from 'components/NoMatch';
import {
  Container,
  CategoryContainer,
  CategoryLink,
  CategoryImage,
  CategoryName
} from './styles';

const CategoriesComponent = ({ categories }) => (
  <Container>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {categories.map((category) => (
      <CategoryContainer key={category.id}>
        <CategoryLink to={`categories/${category.name.toLowerCase()}`}>
          <CategoryImage className="categoryImage">
            <Image image={category.products[0].image} />
          </CategoryImage>
          <CategoryName className="categoryName">
            {`${category.name}`}
          </CategoryName>
        </CategoryLink>
      </CategoryContainer>
    ))}
  </Container>
);

const component = ({ categories, addToBasket }) => (
  <OuterContainer>
    <Header />
    <Switch>
      {categories.map((category) => (
        <Route
          key={category.id}
          path={`/him/categories/${category.name}`}
          render={() => (
            <Products
              key={category.id}
              products={categories.find(cat => cat.name === category.name).products}
              addToBasket={addToBasket}
            />
          )}
        />))}
      <Route
        path="/him/categories"
        render={() => (
          <CategoriesComponent
            categories={categories}
          />
        )}
      />
      <Route component={NoMatch} />
    </Switch>
  </OuterContainer>
);

CategoriesComponent.propTypes = {
  categories: React.PropTypes.arrayOf(React.PropTypes.Array)
};

CategoriesComponent.defaultProps = {
  categories: [{}]
};

component.propTypes = {
  categories: React.PropTypes.arrayOf(React.PropTypes.Array),
  addToBasket: func
};

component.defaultProps = {
  categories: [{}],
  addToBasket: () => {}
};

export default component;
