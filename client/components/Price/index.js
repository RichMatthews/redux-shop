import React from 'react';

const sale = false;
const Price = ({
  salePrice,
  price
}) => (
  <div>
    {sale ? <div>Was £{price} now £{salePrice}</div> : <div>£{price}</div>}
  </div>
);

export default Price;
