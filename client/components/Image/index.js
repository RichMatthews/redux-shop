import React from 'react';
import { string } from 'prop-types';

const Image = ({ image }) => (
  <img src={image} alt="" width="50px" height="50px" />
);

Image.propTypes = {
  image: string
};

Image.defaultProps = {
  image: ''
};

export default Image;
