import CurrentLayout from 'src/Layout';
import SellingProducts from 'src/components/Products/List';

const Home = () => {
  return (
    <CurrentLayout>
      <SellingProducts label='Best Selling Products' />
      <SellingProducts label='Best For Farmer' />
    </CurrentLayout>
  );
};

export default Home;
