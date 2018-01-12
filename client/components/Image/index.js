import { string } from 'prop-types';
import { Container } from './styles';

const Image = ({ image }) => (
  <Container src={image} alt="" />
);

Image.propTypes = {
  image: string
};

Image.defaultProps = {
  image: ''
};

export default Image;
