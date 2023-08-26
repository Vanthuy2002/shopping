import FlexLayout from 'src/Layout/Flex';
import Typo from '../Typo';
import Button from 'src/modules/Button';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Label from 'src/modules/Label';
import Input from 'src/modules/Input';
import { FormControl } from 'src/modules/Form';
import Select from 'src/modules/Select';
import { optionStatus, optionsRoles } from 'src/utils/constants';
import UploadImage from 'src/modules/Upload';
import { Tooltip } from 'react-tooltip';
import { ModalBaseProps } from 'src/utils/types';
import { forwardRef } from 'react';

const ModalAddNew = forwardRef(
  (props: ModalBaseProps, ref: React.LegacyRef<HTMLDivElement> | null) => {
    const { toggle } = props;
    return (
      <div
        tabIndex={-1}
        className='fixed z-50 grid w-full max-h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto place-items-center overlay md:inset-0'
      >
        <div
          ref={ref}
          className='relative w-full max-w-2xl max-h-full bg-white rounded-lg'
        >
          <FlexLayout className='flex !items-start justify-between p-4 border-b rounded-t dark:border-gray-600 dark:bg-gray-700'>
            <Typo
              as='h3'
              className='text-xl font-semibold text-gray-900 dark:text-white'
            >
              Add User
            </Typo>
            <Button
              data-tooltip-content='Close'
              data-tooltip-place='left'
              data-tooltip-id='modal'
              variant='light'
              size='md'
              onClick={toggle}
            >
              <XMarkIcon className='w-5 h-5' />
            </Button>
          </FlexLayout>
          <form className='shadow dark:bg-gray-700' autoComplete='off'>
            <div className='p-6 space-y-6'>
              <FormControl className='grid grid-cols-6 gap-6'>
                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='first_name'>First Name</Label>
                  <Input id='first_name' placeholder='Thuy....' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='last_name'>Last Name</Label>
                  <Input id='last_name' placeholder='Nguyen ....' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='email'>Email</Label>
                  <Input id='email' placeholder='Thuy Nguyen....' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='password'>Password</Label>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Set your password....'
                  />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='phone'>Phone</Label>
                  <Input id='phone' placeholder='012345678....' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='roles'>Roles</Label>
                  <Select options={optionsRoles} heading='Choose user role' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='status'>Status</Label>
                  <Select options={optionStatus} heading='Choose user status' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <Label name='addr'>Addr</Label>
                  <Input id='addr' placeholder='HN, VN....' />
                </FormControl>

                <FormControl className='col-span-6 sm:col-span-3'>
                  <UploadImage />
                </FormControl>
              </FormControl>
            </div>

            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <Button size='lg'>Save all</Button>
            </div>
          </form>
        </div>
        <Tooltip id='modal' />
      </div>
    );
  }
);

export default ModalAddNew;
