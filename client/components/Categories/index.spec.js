import { shallow } from 'enzyme';
import { expect } from 'chai';
import Categories from './index';

describe('Categories', () => {
  let wrapper;
  let category;
  it('should render an image', () => {
    category = {};
    wrapper = shallow(<Categories category={category} />);
    expect(wrapper.find('.categoryImage').exists()).to.equal(true);
  });
  it('should render a name', () => {
    wrapper = shallow(<Categories />);
    expect(wrapper.find('.categoryName').exists()).to.equal(true);
  });
});
