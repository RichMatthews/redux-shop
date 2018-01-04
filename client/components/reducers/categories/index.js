const initialState = [{
  categoryId: 1,
  name: 'Trainers',
  products: [{
    name: 'Nike Trainers',
    price: '175.00',
    salePrice: '70.00',
    id: 3,
    image: '/images/nikes.png',
    colorTags: 'green'
  },
  {
    name: 'NB Trainers',
    price: '150.00',
    salePrice: '70.00',
    id: 4,
    image: '/images/nbs.jpg',
    colorTags: 'green'
  }]
},
{
  categoryId: 2,
  name: 'Rucksacks',
  products: [{
    name: 'Rucksack',
    price: '15.00',
    salePrice: '7.00',
    id: 1,
    image: '/images/rucksack.jpg',
    colorTags: 'green'
  }]
},
{
  categoryId: 3,
  name: 'Paintings',
  products: [{
    name: 'Painting',
    price: '79.00',
    salePrice: '40.00',
    id: 2,
    image: '/images/painting.jpg',
    colorTags: 'black'
  }]
}];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
