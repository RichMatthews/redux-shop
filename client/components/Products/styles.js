import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

import {
  Link
} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 500px;
  margin: 30px;
`;

export const Button = styled.button`
  height: 50px;
`;

export const Product = styled.div`
  height: 300px;
  min-width: 30%;
  margin-bottom: 50px;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Name = styled.div`
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ProductPrice = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;
