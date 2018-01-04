import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

export const BasketContainer = styled.div`
  height: 300px;
`;
export const BasketProducts = styled.div`
  width: 50%;
  margin: 5px;
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
  width: 50%;
  margin: 5px;
  background-color: white;
`;
