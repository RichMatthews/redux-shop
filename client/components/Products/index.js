import React from 'react';
import { func } from 'prop-types';
import { Container,
  Product,
  ProductImage,
  Name,
  ProductPrice,
  AddToBasket
} from './styles';
import Price from '../Price';
import Image from '../Image';

const Products = ({ addToBasket, products }) => (
  <Container>
    {products.map((product) => (
      <Product key={product.id} >
        <ProductImage>
          <Image image={product.image} />
        </ProductImage>
        <Name>
          {product.name}
        </Name>
        <ProductPrice>
          <Price salePrice={product.salePrice} price={product.price} />
        </ProductPrice>
        <AddToBasket>
          <button onClick={() => addToBasket(product)}>Add To Basket</button>
        </AddToBasket>
      </Product>
    ))}
  </Container>
);

Products.propTypes = {
  addToBasket: func
};

Products.defaultProps = {
  addToBasket: null
};

export default Products;
