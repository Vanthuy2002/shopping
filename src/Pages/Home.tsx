import { Fragment } from 'react';
import ListProducts from 'src/components/Products/List';

const Home = () => {
  return (
    <Fragment>
      <ListProducts tag='smartphones' label='Best Selling Products' />
      <ListProducts tag='skincare' label='Best For Famers' />
    </Fragment>
  );
};

export default Home;
