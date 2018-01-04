import styled, { injectGlobal } from 'styled-components';

import {
  Link
} from 'react-router-dom';

injectGlobal`
  body {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 500px;
  margin-top: 5px;
`;

export const CategoryContainer = styled.div`
  height: 300px;
  width: 33%;
  margin-right: 10px;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const CategoryName = styled.div`
  text-align: center;
`;
