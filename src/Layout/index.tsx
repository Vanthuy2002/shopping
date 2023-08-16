import Header from './Header';
import { Fragment } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const CurrentLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default CurrentLayout;
