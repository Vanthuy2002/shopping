import { Link } from 'react-router-dom';
import Typo from '../Typo';
import classNames from 'classnames';

const WebBrand = ({ className }: { className?: string }) => {
  return (
    <Link
      to='/'
      className={classNames(
        'flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white',
        className
      )}
    >
      <img src='/Logo.png' className='w-9 h-9 object-cover' alt='' />
      <Typo as='span'>Shopping</Typo>
    </Link>
  );
};

export default WebBrand;
