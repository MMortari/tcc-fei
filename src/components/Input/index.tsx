import React from 'react';

import { Container } from './styles';

const Input: React.FC = ({ ...info }) => {
  return <Container {...info} />;
};

export default Input;
