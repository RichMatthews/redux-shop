import React from 'react';
import { func } from 'prop-types';
import { ProductContainer,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToBasket
} from './styles';
import Price from '../Price';
import Image from '../Image';

const getProductType = (product) => (product.name === 'Trainers');

const Products = ({ addToBasket, products }) => (
  <div>
    <ProductContainer>
      {products.map((product) => (
        <div>
          {getProductType(product) ?
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
            </Product>
          :
          null
        }
        </div>
      ))}
    </ProductContainer>
  </div>
);

Products.propTypes = {
  addToBasket: func
};

Products.defaultProps = {
  addToBasket: null,
  toggleFilter: null
};

export default Products;
