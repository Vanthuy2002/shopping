import { Fragment, SetStateAction, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Typo from '../Typo';
import { menuSidebar } from 'src/utils/constants';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';

const Sidebar = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = useRef(null);
  const handleOutSide = () => {
    setShow(false);
  };

  useOnClickOutside(ref, handleOutSide);

  return (
    <Fragment>
      <aside
        className={classNames(
          'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700',
          show ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label='Sidebar'
      >
        <div
          ref={ref}
          className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'
        >
          <ul className='space-y-2 font-medium'>
            {menuSidebar.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={`/${menu.to}`}
                  className='flex gap-3 w-full items-center p-2  rounded-md dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group'
                >
                  <span>
                    {
                      <menu.icon className='w-8 h-8 text-gray-700 dark:text-white' />
                    }
                  </span>
                  <Typo as='span' className='text-gray-500 dark:text-white'>
                    {menu.title}
                  </Typo>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
