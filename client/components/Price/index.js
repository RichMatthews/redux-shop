import React from 'react';

class Price extends React.Component {
  render() {
    const sale = false;
    const { salePrice, price } = this.props;
    return (
      <div>
        {sale ? <div>Was £{price} now £{salePrice}</div> : <div>£{price}</div>}
      </div>
    )
  }
}

export default Price;
