import { TrashIcon } from '@heroicons/react/20/solid';
import FlexLayout from 'src/Layout/Flex';
import Typo from 'src/components/Typo';
import Button from 'src/modules/Button';
import Toggle from 'src/modules/Checkbox/Toggle';

const Dashboard = () => {
  return (
    <div className='mt-16'>
      <Typo as='h1' className='text-lg font-medium dark:text-white'>
        Main Dashboard
      </Typo>

      <div className='w-full max-w-2xl bg-teal-lightest font-sans mx-auto'>
        <div className='bg-white rounded shadow p-6 m-4'>
          <div className='mb-4'>
            <h1 className='font-semibold text-xl'>Todo App</h1>
            <FlexLayout className='mt-4'>
              <input
                className='shadow flex-1 appearance-none border rounded py-2 px-3 mr-4 text-grey-darker'
                placeholder='Add Todo'
              />
              <Button size='lg'>Add</Button>
            </FlexLayout>
          </div>

          <FlexLayout className='mb-4 gap-3'>
            <Typo as='p' className='text-grey-darkest flex-1'>
              Add another component to Tailwind Components
            </Typo>
            <Toggle></Toggle>
            <Button variant='remove' size='normal'>
              <TrashIcon className='w-5 h-5' />
            </Button>
          </FlexLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
