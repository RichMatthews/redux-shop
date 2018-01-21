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
  justify-content: center;
  width: 100%;
  height: 500px;
  margin: 30px;
`;

export const CategoryContainer = styled.div`
  height: 300px;
  margin-right: 5%;
  margin-bottom: 50px;
  width: 300px;
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CategoryImage = styled.div`
  height: 100%;
  min-width: 100%;
`;

export const CategoryName = styled.div`
  text-align: center;
`;
