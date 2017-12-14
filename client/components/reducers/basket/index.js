const initialState = {
  items: [],
  total: 0
};

const isProductInBasket = (items, action) => {
  return items.some((basketItem) => {
    return basketItem.product.id === action.data.product.id
  });
};

const calculateTotal = (items) => {
  return items.reduce((totalPrice, basketItem) => {
    const price = basketItem.product.price;
    const quantity = basketItem.quantity;
    const total = price * quantity;
    return totalPrice + total;
  }, 0);
};

const addProductToBasket = (items, action) => {
  if (isProductInBasket(items, action)) {
    return items.map((product) => {
      if (product.product.id === action.data.product.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  }

  const basketState = [].concat(items).concat({ ...action.data, quantity: 1 });
  return basketState;
};

const removeProductFromBasket = (items, action) => {
  if (isProductInBasket(items, action)) {
    return items.map((product) => {
      if (product.product.id === action.data.product.id) {
        if (product.quantity > 0) {
          return null;
        }
      }
      return product;
    }).filter((p) => Boolean(p));
  }
};

const increaseItemQuantity = (items, action) => items.map((product) => {
  if (product.product.id === action.data.product.product.id) {
    return { ...product, quantity: product.quantity + 1 };
  }
  return product;
}).filter((p) => Boolean(p));

const decreaseItemQuantitiy = (items, action) => items.map((product) => {
  if (product.product.id === action.data.product.product.id) {
    if (product.quantity === 1) {
      return null;
    }

    return { ...product, quantity: product.quantity - 1 };
  }
  return product;
}).filter((p) => Boolean(p));

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        items: addProductToBasket(state.items, action),
        total: calculateTotal(state.items)
      };
    case 'REMOVE_FROM_BASKET':
      return {
        items: removeProductFromBasket(state.items, action),
        total: calculateTotal(state.items)
      };
    case 'INCREASE_QUANTITY':
      return {
        items: increaseItemQuantity(state.items, action),
        total: calculateTotal(state.items)
      };
    case 'DECREASE_QUANTITY':
      return {
        items: decreaseItemQuantitiy(state.items, action),
        total: calculateTotal(state.items)
      };
    case 'CLEAR_BASKET':
      return { items: [], total: 0 };
    default:
      return state;
  }
};
