const initialState = [
  {
    name: 'Rucksack',
    price: '15.00',
    salePrice: '7.00',
    id: 1,
    image: '/images/rucksack.jpg'
  },
  {
    name: 'Painting',
    price: '79.00',
    salePrice: '40.00',
    id: 2,
    image: '/images/rucksack.jpg'
  },
  {
    name: 'Trainers',
    price: '150.00',
    salePrice: '70.00',
    id: 3,
    image: '/images/rucksack.jpg'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PRODUCTS':
      const productState = [].concat(state).concat(action.data);
      return productState;
    default:
      return state;
  }
};
