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
  ProductContainer,
  ProductLink,
  ProductImage,
  ProductName
} from './styles';

const ProductComponent = ({ products }) => (
  <Container>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {products.map((category) => (
      <ProductContainer key={category.id}>
        <ProductLink to={`categories/${category.name.toLowerCase()}`}>
          <ProductImage className="categoryImage">
            <Image image={category.products[0].image} />
          </ProductImage>
          <CategoryName className="categoryName">
            {`${category.name}`}
          </CategoryName>
        </ProductLink>
      </ProductContainer>
    ))}
  </Container>
);

const component = ({ products, addToBasket }) => (
  <OuterContainer>
    <Header />
    <Switch>
      {products.map((category) => (
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
        path="/him/categories/"
        render={() => (
          <ProductComponent
            categories={categories}
          />
        )}
      />
      <Route component={NoMatch} />
    </Switch>
  </OuterContainer>
);

export default component;
