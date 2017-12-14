import React from 'react';
import { connect } from 'react-redux';
import { addToBasket, removeFromBasket, clearBasket, increaseQuantity, decreaseQuantity } from '../actions';
import './index.scss';

const mapStateToProps = state => ({
  basket: state.basket,
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  addToBasket: (product) => {
    dispatch(addToBasket(product))
  },
  removeFromBasket: (product) => {
    dispatch(removeFromBasket(product))
  },
  increaseQuantity: (product) => {
    dispatch(increaseQuantity(product))
  },
  decreaseQuantity: (product) => {
    dispatch(decreaseQuantity(product))
  },
  clearBasket: () => {
    dispatch(clearBasket())
  }
})

class Container extends React.Component {

  calculateTotal = () => {
    return this.props.basket.reduce((totalPrice, basketItem) => {
      const price = basketItem.product.price;
      const quantity = basketItem.quantity;
      const total = price * quantity;
      return totalPrice + total
    }, 0)
  }

  render(){
    return(
      <div className="container">
        {this.props.products.map((product) => {
          return <div>
            Name: {product.name}
            <br />
            Price: {product.price}
            <br />
            <button onClick={() => this.props.addToBasket(product)}>Add To Basket</button>
            <br />
            </div>
        })}

       <div className="basket">
           <div className="products">
             <h1>Basket</h1>
               {this.props.basket.items.map((item) => {
                 return <div className="product">
                          <span className="price">£{item.quantity * item.product.price}</span>
                          <span><button onClick={() => this.props.removeFromBasket(item.product)}>X</button></span>
                          <p className="name">{item.product.name}</p>
                          <span className="quantity">Qty: {item.quantity}</span>
                          <span><button onClick={() => this.props.increaseQuantity(item)} className="quantity">+</button></span>
                          <span><button onClick={() => this.props.decreaseQuantity(item)} className="quantity">-</button></span>
                        </div>
               }, this)}
               <button onClick={() => this.props.clearBasket()}>Clear Basket</button>
           </div>
           <div className="total">
            <h1> Total </h1>
             <span className="label">Sub-total </span>
             <span className="amount">£{this.props.basket.total}</span>
             <button>Checkout</button>
           </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
