import styled, { injectGlobal } from 'styled-components';

injectGlobal(`
  body {
    margin: 0;
  }
`);

export const BasketContainer = styled.div`
  height: 300px;
  display: flex;
`;
export const BasketProducts = styled.div`
  width: 70%;
  margin: 40px;
  background-color: white;
`;
export const BasketProduct = styled.div`
  color: black;
  border-top: 1px solid grey;
  padding: 4px;
`;
export const BasketProductImage = styled.div`
`;

export const PriceAndRemove = styled.div`
display: flex;
justify-content: space-between;
`;
export const BasketProductPrice = styled.div`

`;
export const BasketProductRemove = styled.div`

`;
export const BasketProductName = styled.div`

`;
export const BasketProductQuantity = styled.div`

`;
export const Total = styled.div`
  width: 30%;
  margin: 40px;
  background-color: white;
`;

export const EmptyBasket = styled.div`
  display: flex;
  justify-content: center;
`;
