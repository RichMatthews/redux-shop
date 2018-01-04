import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: black;
  color: white;
  width: 100%;
`;

export const HeaderItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const HeaderItem = styled.li`

`;

export const HeaderItemLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  @media (min-width: 700px){
    color: red;
  }
`;
