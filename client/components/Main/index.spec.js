import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
import NoMatch from 'components/NoMatch';
import Main from './index';

describe('main', () => {
  describe('react-router', () => {
    let wrapper;
    it('should go to a 404', () => {
      wrapper = mount(
        <MemoryRouter initialEntries={['/badRoute']}>
          <Main />
        </MemoryRouter>
      ).toJSON())
      expect(wrapper.find(NoMatch)).to.have.length(1);
    });
  });
});
