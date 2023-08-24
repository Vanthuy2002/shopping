import { Link } from 'react-router-dom';
import Typo from 'src/components/Typo';

const footerLinks: string[] = ['About Us', 'Privacy Policy', 'Contact'];

const Footer = () => {
  return (
    <footer className='m-4 bg-white rounded-lg shadow dark:bg-gray-900'>
      <div className='w-full max-w-screen-xl p-4 mx-auto md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link to='/' className='flex items-center mb-4 sm:mb-0'>
            <img src='/Logo.png' className='h-8 mr-3' alt='Logo' />
            <Typo
              as='span'
              className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'
            >
              Shopping App
            </Typo>
          </Link>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            {footerLinks.map((item, index) => (
              <li key={index}>
                <Link to='/' className='mr-4 hover:underline md:mr-6 '>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
