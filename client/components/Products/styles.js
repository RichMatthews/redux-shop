import styled from 'styled-components';

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
  width: 22%;
  margin-bottom: 100px;
  margin: 15px;
`;

export const ProductImage = styled.div`
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
