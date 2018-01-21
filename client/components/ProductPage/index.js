import {
  ProductContainer,
  AddToBasket
} from './styles';

const component = ({ product, addToBasket }) => (
  <ProductContainer>
    {product.name.S}
    <AddToBasket>
      <button className="addToBasket" onClick={() => addToBasket(product)}>Add To Basket</button>
    </AddToBasket>
  </ProductContainer>
);
export default component;
