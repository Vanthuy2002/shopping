import { Link } from 'react-router-dom';
import Typography from '../Typography';
import { useToggle, useOnClickOutside } from 'usehooks-ts';
import { useRef } from 'react';

type optionsUsers = {
  id: number;
  title: string;
  to: string;
};

const options: optionsUsers[] = [
  { id: 1, title: 'Dashboard', to: '/dashboard' },
  { id: 2, title: 'Profile', to: '/profile' },
  { id: 3, title: 'Settings', to: '/setting' },
];

const User = () => {
  const [show, toggle, setShow] = useToggle(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShow(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <section className='relative' ref={ref}>
      <img
        className='object-cover w-10 h-10 rounded-full cursor-pointer'
        src='/avatar.jpg'
        alt='user'
        onClick={toggle}
      />

      {show && (
        <div className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow -translate-x-3/4 w-44 dark:bg-gray-700 dark:divide-gray-600'>
          <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
            <Typography as='p' className='mb-1'>
              Thuy Nguyen
            </Typography>
            <Typography as='p' className='font-medium truncate'>
              name@flowbite.com
            </Typography>
          </div>
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='avatarButton'
          >
            {options.map((option) => (
              <li key={option.id}>
                <Link
                  to={option.to}
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  {option.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='py-1 text-sm'>
            <button className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
              Logout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default User;
