import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import FlexLayout from 'src/Layout/Flex';
import Dropdown from 'src/components/Dropdown';
import Button from 'src/modules/Button';
import Checkbox from 'src/modules/Checkbox';
import Input from 'src/modules/Input';
import Tags from 'src/modules/Tags';

const ManageUser = () => {
  return (
    <section className='mt-16'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800'>
          <Dropdown />
          <Input style={{ width: 300 }} placeholder='Search for user....' />
        </div>

        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <FlexLayout className='flex items-center'>
                  <Checkbox />
                </FlexLayout>
              </th>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                User Roles
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='w-4 p-4'>
                <FlexLayout className='flex items-center'>
                  <Checkbox />
                </FlexLayout>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
              >
                <img
                  className='w-10 h-10 rounded-full object-cover'
                  src='/avatar.jpg'
                  alt='Jese image'
                />
                <div className='pl-3'>
                  <div className='text-base font-semibold'>Neil Sims</div>
                  <div className='font-normal text-gray-500'>
                    neil.sims@flowbite.com
                  </div>
                </div>
              </th>
              <td className='px-6 py-4'>React Developer</td>
              <td className='px-6 py-4'>
                <Tags text='Online' />
              </td>
              <td className='px-6 py-4'>
                <FlexLayout className='gap-2'>
                  <Button variant='secondary' size='normal'>
                    <PencilIcon className='w-5 h-5' />
                  </Button>
                  <Button variant='remove' size='normal'>
                    <TrashIcon className='w-5 h-5' />
                  </Button>
                </FlexLayout>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          id='editUserModal'
          tabIndex={-1}
          aria-hidden='true'
          className='fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
        >
          <div className='relative w-full max-w-2xl max-h-full'>
            <form className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Edit user
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='editUserModal'
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                </button>
              </div>

              <div className='p-6 space-y-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Bonnie'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Green'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='example@company.com'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='phone-number'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Phone Number
                    </label>
                    <input
                      type='number'
                      name='phone-number'
                      id='phone-number'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='e.g. +(12)3456 789'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='department'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Department
                    </label>
                    <input
                      type='text'
                      name='department'
                      id='department'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Development'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='company'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Company
                    </label>
                    <input
                      type='number'
                      name='company'
                      id='company'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='123456'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='current-password'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Current Password
                    </label>
                    <input
                      type='password'
                      name='current-password'
                      id='current-password'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='••••••••'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='new-password'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      New Password
                    </label>
                    <input
                      type='password'
                      name='new-password'
                      id='new-password'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='••••••••'
                    />
                  </div>
                </div>
              </div>

              <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <button
                  type='submit'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageUser;
