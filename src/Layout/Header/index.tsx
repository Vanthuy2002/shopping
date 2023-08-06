import Contacts from 'src/components/Contact';
import Navbar from 'src/components/Navbar';

const Header = () => {
  return (
    <header className='w-full'>
      <Contacts />
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
