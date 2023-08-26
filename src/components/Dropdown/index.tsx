import Button from 'src/modules/Button';
import { useRef } from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';

const Dropdown = ({ onClick }: { onClick: () => void }) => {
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
        <div className='absolute z-10 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
          <span
            onClick={onClick}
            className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Add new
          </span>
          <span className='block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
            Delete
          </span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
