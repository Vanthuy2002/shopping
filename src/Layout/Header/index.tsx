import MenuCategory from 'src/components/Category/Menu';
import Navbar from 'src/components/Navbar';

const Header = () => {
  return (
    <header className='w-full'>
      <Navbar />
      <MenuCategory />
    </header>
  );
};

export default Header;
