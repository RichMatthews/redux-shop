import React from 'react';
import { Container,
  HeaderItems,
  HeaderItem,
  HeaderItemLink
} from './styles';

const headerItems = [
  { name: 'home', path: '/' },
  { name: 'him', path: '/him/categories' },
  { name: 'her', path: '/her/categories' },
  { name: 'search', path: '/search' },
  { name: 'basket', path: '/basket' }
];

const component = () => (
  <Container>
    <HeaderItems>
      {headerItems.map((item) => (
        <HeaderItem>
          <HeaderItemLink
            to={`${item.path}`}
            exact
            activeStyle={{
              color: 'yellow'
             }}
          >{`${item.name}`}
          </HeaderItemLink>
        </HeaderItem>
      ))}
    </HeaderItems>
  </Container>
);

export default component;
