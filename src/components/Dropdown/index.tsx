import Button from 'src/modules/Button';
import { useRef } from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';

const Dropdown = () => {
  const [show, toggle, setShow] = useToggle(false);
  const ref = useRef(null);

  const handleClickOut = () => setShow(false);

  useOnClickOutside(ref, handleClickOut);
  return (
    <div ref={ref}>
      <Button onClick={toggle} size='lg' variant='light'>
        Actions
      </Button>

      {show && (
        <div className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mt-3'>
          <ul className='py-1 text-sm text-gray-700 dark:text-gray-200'>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Reward
              </a>
            </li>
          </ul>
          <div className='py-1'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            >
              Delete User
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
