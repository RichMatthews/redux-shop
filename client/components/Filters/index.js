import React from 'react';
import { Container,
  ColorContainer,
  BrandContainer,
  PriceContainer
} from './styles';

const Filters = ({ refineSearch }) => (
  <Container>
    Filters
    <BrandContainer>
      Brands
    </BrandContainer>
    <ColorContainer>
      Color
    </ColorContainer>
    <PriceContainer>
      Price
    </PriceContainer>
    <button onClick={() => refineSearch('black')}> Submit </button>
  </Container>
);

export default Filters;
