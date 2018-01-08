import Price from 'components/Price';
import Image from 'components/Image';
import OuterContainer from 'utils/styles/outerContainer/index';
import ProductPage from 'components/ProductPage';
import NoMatch from 'components/NoMatch';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Container,
  Product,
  ProductImage,
  Name,
  ProductPrice,
  ProductLink
} from './styles';

const ProductsComponent = ({ addToBasket, products }) => (
  <Container>
    {products.map((product) => (
      <Product key={product.id} >
        <ProductLink to={`${product.category}/${product.id}`}>
          <ProductImage>
            <Image image={product.image} />
          </ProductImage>
          <Name>
            {product.name}
          </Name>
          <ProductPrice>
            <Price salePrice={product.salePrice} price={product.price} />
          </ProductPrice>
        </ProductLink>
      </Product>
    ))}
  </Container>
);

const component = ({ products, addToBasket }) => (
  <OuterContainer>
    <Switch>
      {products.map((product) => (
        <Route
          exact
          path={`/him/categories/${product.category}`}
          render={() => (
            <ProductsComponent
              products={products}
            />
          )}
        />))
      }
      {products.map((product) => (
        <Route
          exact
          path={`/him/categories/${product.category}/${product.id}`}
          render={() => (
            <ProductPage
              product={product}
              addToBasket={addToBasket}
            />
          )}
        />))
      }
      <Route component={NoMatch} />
    </Switch>
  </OuterContainer>
);

export default component;
