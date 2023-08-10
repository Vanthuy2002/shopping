import { ChildProps } from 'src/utils/types';
import Header from './Header';
import { Fragment } from 'react';

interface LayoutProps {
  children?: ChildProps;
}

const CurrentLayout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header></Header>
      {children}
    </Fragment>
  );
};

export default CurrentLayout;
