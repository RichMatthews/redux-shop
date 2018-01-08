const initialState = [{
  categoryId: 10000,
  name: 'Trainers',
  products: [{
    id: 10000,
    name: 'Nike Trainers',
    price: '175.00',
    salePrice: '70.00',
    image: '/images/nikey.jpeg',
    colorTags: 'green',
    category: 'trainers'
  },
  {
    id: 10001,
    name: 'NB Trainers',
    price: '150.00',
    salePrice: '70.00',
    image: '/images/painting.jpg',
    colorTags: 'green',
    category: 'trainers'
  },
  {
    id: 10002,
    name: 'NB Trainers',
    price: '150.00',
    salePrice: '70.00',
    image: '/images/painting.jpg',
    colorTags: 'green',
    category: 'trainers'
  },
  {
    id: 10003,
    name: 'NB Trainers',
    price: '150.00',
    salePrice: '70.00',
    image: '/images/painting.jpg',
    colorTags: 'green',
    category: 'trainers'
  },
  {
    id: 10004,
    name: 'NB Trainers',
    price: '150.00',
    salePrice: '70.00',
    image: '/images/painting.jpg',
    colorTags: 'green',
    category: 'trainers'
  }]
},
{
  categoryId: 10001,
  name: 'Rucksacks',
  products: [{
    name: 'Rucksack',
    price: '15.00',
    salePrice: '7.00',
    id: 10000,
    image: '/images/painting.jpg',
    colorTags: 'green',
    category: 'rucksacks'
  }]
},
{
  categoryId: 10002,
  name: 'Paintings',
  products: [{
    name: 'Painting',
    price: '79.00',
    salePrice: '40.00',
    id: 10000,
    image: '/images/painting.jpg',
    colorTags: 'black',
    category: 'paintings'
  }]
},
{
  categoryId: 10003,
  name: 'Hoodies and Sweatshirts',
  products: [{
    name: 'Sweatshirt 1',
    price: '90.00',
    salePrice: '40.00',
    id: 10000,
    image: '/images/painting.jpg',
    colorTags: 'black',
    category: 'hoodies'
  }]
},
{
  categoryId: 10004,
  name: 'Jeans',
  products: [{
    name: 'Jeans One',
    price: '80',
    salePrice: '40.00',
    id: 10000,
    image: '/images/painting.jpg',
    colorTags: 'black',
    category: 'jeans'
  }]
}];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
