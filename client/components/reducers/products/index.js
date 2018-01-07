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

const returnMatchingProducts = (product) => (
  product.colorTags === 'green'
);

const includedProducts = (products) => (
  products.map((product) => {
    if (returnMatchingProducts(product)) {
      return { ...product };
    }
  }).filter((item) => Boolean(item))
);

export default (state = initialState, action) => {
  let productState;
  switch (action.type) {
    case 'ADD_TO_PRODUCTS':
      productState = [].concat(state).concat(action.data);
      return productState;
    case 'REFINE_SEARCH':
      productState = { products: includedProducts(state.products) };
      return productState;
    default:
      return state;
  }
};
