import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';
import FlexLayout from 'src/Layout/Flex';
import Dropdown from 'src/components/Dropdown';
import { ModalEditUser, ModalAddNew } from 'src/components/Modal';
import Button from 'src/modules/Button';
import Checkbox from 'src/modules/Checkbox';
import Input from 'src/modules/Input';
import Tags from 'src/modules/Tags';
import { useToggle } from 'usehooks-ts';
import TransitionComp from 'src/components/Transitons';

const ManageUser = () => {
  const [showModalEdit, toggleModalEdit, setShowModalEdit] = useToggle(false);
  const [showAddModal, toggleAddModal] = useToggle(false);
  const nodeRef = useRef(null);

  const handleClose = (bool: boolean) => setShowModalEdit(!bool);

  return (
    <section className='mt-16'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <div className='flex items-center justify-between p-4 bg-white dark:bg-gray-800'>
          <Dropdown onClick={toggleAddModal} />
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
                  className='object-cover w-10 h-10 rounded-full'
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
              <td className='px-6 py-4'>
                <Tags text='Admin' />
              </td>
              <td className='px-6 py-4'>
                <Tags text='Online' />
              </td>
              <td className='px-6 py-4'>
                <FlexLayout className='gap-2'>
                  <Button
                    onClick={toggleModalEdit}
                    variant='secondary'
                    size='normal'
                  >
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

        <TransitionComp
          className='modal'
          inTo={showModalEdit}
          nodeRef={nodeRef}
          onExit={() => handleClose(showModalEdit)}
          timeout={300}
        >
          <ModalEditUser ref={nodeRef} toggle={toggleModalEdit} />
        </TransitionComp>

        <TransitionComp
          inTo={showAddModal}
          className='modal'
          nodeRef={nodeRef}
          onExit={() => handleClose(showAddModal)}
          timeout={300}
        >
          <ModalAddNew ref={nodeRef} toggle={toggleAddModal} />
        </TransitionComp>
      </div>
    </section>
  );
};

export default ManageUser;
