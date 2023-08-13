import { ChildProps } from 'src/utils/types';
import Header from './Header';
import { Fragment } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children?: ChildProps;
}

const CurrentLayout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default CurrentLayout;
