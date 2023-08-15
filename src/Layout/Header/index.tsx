import MenuCategory from 'src/components/Category/Menu';
import Contacts from 'src/components/Contact';
import Navbar from 'src/components/Navbar';

const Header = () => {
  return (
    <header className='w-full'>
      <Contacts />
      <Navbar />
      <MenuCategory />
    </header>
  );
};

export default Header;
