import Header from './Header';
import { Fragment } from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Toasty from './Noti';

const CurrentLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <Toasty />
    </Fragment>
  );
};

export default CurrentLayout;
