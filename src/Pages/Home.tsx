import CurrentLayout from 'src/Layout';
import ListProducts from 'src/components/Products/List';

const Home = () => {
  return (
    <CurrentLayout>
      <ListProducts tag='selling' label='Best Selling Products' />
      <ListProducts tag='farmer' label='Best For Farmer' />
    </CurrentLayout>
  );
};

export default Home;
