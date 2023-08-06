import React from 'react';
import { TypographyAsHeading } from 'src/utils/types';

const Typography = ({ children, as = 'h1', ...rest }: TypographyAsHeading) => {
  return React.createElement(as, { ...rest }, children);
};

export default Typography;
