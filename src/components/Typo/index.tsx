import React from 'react';
import { TypoAsHeading } from 'src/utils/types';

const Typo = ({ children, as = 'h1', ...rest }: TypoAsHeading) => {
  return React.createElement(as, { ...rest }, children);
};

export default Typo;
