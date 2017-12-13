const initialState = [
  {
    name: 'Rucksack',
    price: '15.00',
    id: 1,
    image: '../../data/rucksack.jpg'
  },
  {
    name: 'Painting',
    price: '79.00',
    id: 2,
    image: '../../data/rucksack.jpg'
  },
  {
   name: 'Trainers',
   price: '150.00',
   id: 3,
   image: '../../data/rucksack.jpg'
  }
];

export default (state = initialState, action) => {
  switch(action.type) {
    case "ADD_TO_PRODUCTS":
      const productState = [].concat(state).concat(action.data)
      return productState;
      break;
    default:
        return state
  };
};
