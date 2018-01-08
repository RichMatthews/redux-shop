import {
  ProductContainer,
  AddToBasket
} from './styles';

const component = ({ product, addToBasket }) => (
  <ProductContainer>
    {product.name}
    <AddToBasket>
      <button onClick={() => addToBasket(product)}>Add To Basket</button>
    </AddToBasket>
  </ProductContainer>
);
export default component;
