export const addToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    data: {
      product: product
    }
  }
}

export const removeFromBasket = (product) => {
  return {
    type: "REMOVE_FROM_BASKET",
    data: {
      product: product
    }
  }
}

export const clearBasket = () => {
  return {
    type: "CLEAR_BASKET"
  }
}

export const increaseQuantity = (product) => {
  return {
    type: "INCREASE_QUANTITY",
    data: {
      product: product
    }
  }
}

export const decreaseQuantity = (product) => {
  return {
    type: "DECREASE_QUANTITY",
    data: {
      product: product
    }
  }
}
