import React from 'react';
import { ProductContainer,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  AddToBasket
} from './styles';
import Price from '../Price';
import Image from '../Image';


class Products extends React.Component {
  render() {
    return (
      <ProductContainer>
      {this.props.products.map((product) => (
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
            <button onClick={() => this.props.addToBasket(product)}>Add To Basket</button>
          </AddToBasket>
        </Product>))}
      </ProductContainer>
    );
  }
}

export default Products;
