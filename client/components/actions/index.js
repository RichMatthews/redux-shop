export const addToBasket = (product) => ({
  type: 'ADD_TO_BASKET',
  data: {
    product
  }
});

export const removeFromBasket = (product) => ({
  type: 'REMOVE_FROM_BASKET',
  data: {
    product
  }
});

export const clearBasket = () => ({
  type: 'CLEAR_BASKET'
});

export const increaseQuantity = (product) => ({
  type: 'INCREASE_QUANTITY',
  data: {
    product
  }
});

export const decreaseQuantity = (product) => ({
  type: 'DECREASE_QUANTITY',
  data: {
    product
  }
});

export const refineSearch = (product) => ({
  type: 'REFINE_SEARCH',
  data: {
    product
  }
});
