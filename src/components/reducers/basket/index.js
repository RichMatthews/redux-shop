const initialState = [];

// const isProductInBasket = (state, action) => {
//   for (var i=0; i < state.length; i++){
//     if(state[i].product.id == action.data.product.id){
//       return true;
//     }
//   }
// }

const isProductInBasket = (state, action) => {
  return state.some((basketItem) => {
    return basketItem.product.id === action.data.product.id
  });
};

const calculateTotal = () => {};

export default (state = initialState, action) => {
  switch(action.type) {
    case "ADD_TO_BASKET":
      if (isProductInBasket(state, action)) {
          return state.map((product) => {
            if (product.product.id == action.data.product.id) {
               return {...product, quantity: product.quantity + 1}
            }
            return product;
          });
      }
      else {
        const basketState = [].concat(state).concat({...action.data, quantity: 1})
        return basketState;
        break;
      }
      case "REMOVE_FROM_BASKET":
        if (isProductInBasket(state, action)) {
            return state.map((product) => {
              if (product.product.id == action.data.product.id) {
                if (product.quantity > 0){
                  return null;
                }
              }
              return product;
            }).filter((p) => Boolean(p));
        }
      case "INCREASE_QUANTITY":
        return state.map((product) => {
          if (product.product.id == action.data.product.product.id) {
              return {...product, quantity: product.quantity + 1}
          }
          return product;
        }).filter((p) => Boolean(p))
      case "DECREASE_QUANTITY":
      return state.map((product) => {
        if (product.product.id == action.data.product.product.id) {
          if (product.quantity == 1){
            return null;
          }
          else {
              return {...product, quantity: product.quantity - 1}
          }
        }
          return product;
        }).filter((p) => Boolean(p))
      case "CLEAR_BASKET":
        const newState = state.basket = [];
        return newState;
    default:
        return state
  };
};
