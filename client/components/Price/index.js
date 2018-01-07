const sale = false;
const Price = ({
  salePrice,
  price
}) => (sale ? <div>Was £{price} now £{salePrice}</div> : <div>£{price}</div>);

export default Price;
