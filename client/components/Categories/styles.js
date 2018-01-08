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
  flex-wrap: wrap;
  width: 95%;
  height: 500px;
  margin: 30px;
  justify-content: center;
`;

export const CategoryContainer = styled.div`
  height: 300px;
  min-width: 30%;
  margin-bottom: 50px;
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
