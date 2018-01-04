import React from 'react';
import { func } from 'prop-types';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  Container,
  CategoryContainer,
  CategoryLink,
  CategoryImage,
  CategoryName
} from './styles';
import OuterContainer from '../../utils/styles/outerContainer/index';
import Header from '../Header';
import Products from '../Products';
import Image from '../Image';

const noMatch = () => <div>404 --- Page Not Found </div>;

const CategoriesComponent = ({ categories }) => (
  <Container>
    {categories.map((category) => (
      <CategoryContainer key={category.id}>
        <CategoryLink to={`${category.name.toLowerCase()}`}>
          <CategoryImage>
            <Image image={category.products[0].image} />
          </CategoryImage>
          <CategoryName>
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
    <Container>
      <Switch>
        {categories.map((category) => (
          <Route
            path={`/him/${category.name}`}
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
        <Route component={noMatch} />
      </Switch>
    </Container>
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
