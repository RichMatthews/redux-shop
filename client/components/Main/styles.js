import styled, { injectGlobal } from 'styled-components';
import { NavLink } from 'react-router-dom';

injectGlobal(`
  body {
    margin: 0;
  }
`);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content; center;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Him = styled.div`
  border: 4px solid #06f;
  margin: 5px;
  a: {
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

export const HimLink = styled(NavLink)`
  text-decoration: none;
  color: #06f;
  font-family: futura-pt;
  text-transform: uppercase;
  width: 30%;
`;

export const HerLink = HimLink.extend`
  color: pink;
`;
