import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';
import Input from 'src/modules/Input';
import { useURL } from 'src/hooks/useURL';
import WebBrand from '../Brand';

const Navbar = () => {
  const goToRegsiter = useURL('/register');
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <FlexLayout className='flex-wrap justify-between max-w-screen-xl p-4 mx-auto'>
        <WebBrand />

        <FlexLayout className='md:order-2'>
          <Button onClick={goToRegsiter}>Get Started</Button>
          <Button variant='light' customClass='md:hidden'>
            <Bars3BottomRightIcon className='w-6 h-6' />
          </Button>
        </FlexLayout>

        <div className='items-center justify-between hidden w-full mt-5 md:mt-0 md:flex md:max-w-sm md:order-1'>
          <Input placeholder='Search products any...'></Input>
        </div>
      </FlexLayout>
    </nav>
  );
};
export default Navbar;
