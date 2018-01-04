import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content; center;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
`;

export const Him = styled.div`
  border: 4px solid #06f;
  width: 400px;
  height: 400px;
  margin: 5px;
  a {
    text-decoration: none;
  }
  a: visited {
    color: #06f
  };
  text-align: center;
  line-height: 400px;
  font-size: 50px;
`;

export const Her = Him.extend`
  border: 4px solid pink;
  a: visited {
    color: pink
  };
`;
