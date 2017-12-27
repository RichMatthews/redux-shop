import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Container, CategoryContainer } from './styles';
import Products from '../Products';

const noMatch = () => <div>404 - Page Not Found </div>;

const Categories = ({ products, addToBasket }) => (
  <Container>
    {products.map((category) => (
      <CategoryContainer>
        <Link to={`${category.name.toLowerCase()}`}>{`${category.name}`}</Link>
      </CategoryContainer>
    ))}
    <Route
      path="/him/trainers"
      render={() => (
        <Products
          products={products}
        />
      )}
    />
    <Route component={noMatch} />
  </Container>
);

export default Categories;
