import { connect } from 'react-redux';
import { addToBasket, removeFromBasket, clearBasket, increaseQuantity, decreaseQuantity, refineSearch } from '../actions';
import Main from '../Main';

const mapStateToProps = state => ({
  basket: state.basket,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  addToBasket: (product) => {
    dispatch(addToBasket(product));
  },
  removeFromBasket: (product) => {
    dispatch(removeFromBasket(product));
  },
  increaseQuantity: (product) => {
    dispatch(increaseQuantity(product));
  },
  decreaseQuantity: (product) => {
    dispatch(decreaseQuantity(product));
  },
  clearBasket: () => {
    dispatch(clearBasket());
  },
  refineSearch: () => {
    dispatch(refineSearch());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
