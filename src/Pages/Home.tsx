import { Fragment } from 'react';
import ListProducts from 'src/components/Products/List';

const Home = () => {
  return (
    <Fragment>
      <ListProducts tag='selling' label='Best Selling Products' />
      <ListProducts tag='farmer' label='Best For Farmer' />
    </Fragment>
  );
};

export default Home;
