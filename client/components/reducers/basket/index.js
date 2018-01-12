const initialState = {
  items: [],
  total: 0
};

const isProductInBasket = (items, action) => {
  items.some((basketItem) => (
    basketItem.product.id === action.data.product.id
  ));
};

const calculateTotal = (items) => {
  return items.reduce((totalPrice, basketItem) => {
    const { product: { price }, quantity } = basketItem;
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
    case 'ADD_TO_BASKET': {
      const items = addProductToBasket(state.items, action);
      return {
        items,
        total: calculateTotal(items)
      };
    }
    case 'REMOVE_FROM_BASKET': {
      const items = removeProductFromBasket(state.items, action);
      return {
        items,
        total: calculateTotal(items)
      };
    }
    case 'INCREASE_QUANTITY': {
      const items = increaseItemQuantity(state.items, action);
      return {
        items,
        total: calculateTotal(items)
      };
    }
    case 'DECREASE_QUANTITY': {
      const items = decreaseItemQuantitiy(state.items, action);
      return {
        items,
        total: calculateTotal(items)
      };
    }
    case 'CLEAR_BASKET':
      return { items: [], total: 0 };
    default:
      return state;
  }
};
