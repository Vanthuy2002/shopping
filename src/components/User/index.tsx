import { Link, useNavigate } from 'react-router-dom';
import Typography from '../Typography';
import { useToggle, useOnClickOutside } from 'usehooks-ts';
import { useRef } from 'react';
import { User, signOut } from 'firebase/auth';
import { auth } from 'src/firebase/config';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

type optionsUsers = {
  id: number;
  title: string;
  to: string;
};

interface UserProps {
  user: User | null;
}

const options: optionsUsers[] = [
  { id: 1, title: 'Dashboard', to: 'me/dashboard' },
  { id: 2, title: 'Profile', to: 'me/profile' },
];

const UserInfo = ({ user }: UserProps) => {
  const [show, toggle, setShow] = useToggle(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = () => {
    setShow(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const handleLogout = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: 'We will miss you bro!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await signOut(auth);
          navigate('/login');
          Swal.fire('Success!', 'Logout successfully.', 'success');
        }
      });
    } catch (error) {
      toast.error('Can not logout, try agian');
    }
  };

  return (
    <section className='relative' ref={ref}>
      <img
        className='object-cover w-10 h-10 rounded-full cursor-pointer'
        src={user?.photoURL || '/avatar.jpg'}
        alt='user'
        onClick={toggle}
      />

      {show && (
        <div className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow -translate-x-3/4 w-52 dark:bg-gray-700 dark:divide-gray-600'>
          <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
            <Typography as='p' className='mb-1'>
              {user?.displayName || 'CLient Accounts'}
            </Typography>
            <Typography as='p' className='font-medium truncate'>
              {user?.email || 'Login to see more...'}
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
            <button
              onClick={handleLogout}
              className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserInfo;
