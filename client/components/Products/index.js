import React from 'react';
import { func } from 'prop-types';
import { ProductContainer,
  Product,
  Button,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToBasket
} from './styles';
import Price from '../Price';
import Image from '../Image';


const Products = ({ addToBasket, toggleFilter, products }) => (
  <div>
    <Button onClick={() => toggleFilter()}> im btn </Button>
    <ProductContainer>
      {products.products.map((product) => (
        <Product>
          <ProductImage>
            <Image image={product.image} />
          </ProductImage>
          <ProductName>
            {product.name}
          </ProductName>
          <ProductPrice>
            <Price salePrice={product.salePrice} price={product.price} />
          </ProductPrice>
          <AddToBasket>
            <button onClick={() => addToBasket(product)}>Add To Basket</button>
          </AddToBasket>
        </Product>))}
    </ProductContainer>
  </div>
);

Products.propTypes = {
  addToBasket: func,
  toggleFilter: func
};

Products.defaultProps = {
  addToBasket: null,
  toggleFilter: null
};

export default Products;
