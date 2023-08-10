import { Link } from 'react-router-dom';
import Label from '../modules/Label';
import Input from '../modules/Input';
import FlexLayout from 'src/Layout/Flex';
import Checkbox from 'src/modules/Checkbox';
import Button from 'src/modules/Button';
import Typography from 'src/components/Typography';
import FormControl from 'src/modules/Form/FormControl';

const Register = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <FlexLayout className='flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          to='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          Shopping App
        </Link>

        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <Typography className='text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white'>
              Create and account
            </Typography>
            <form className='space-y-4 md:space-y-6'>
              <FormControl>
                <Label name='email'>Your email</Label>
                <Input name='email' placeholder='Enter your email...' />
              </FormControl>

              <FormControl>
                <Label name='email'>Your Password</Label>
                <Input name='password' placeholder='Enter your password...' />
              </FormControl>
              <FormControl>
                <Label name='confirm'>Comfirm Password</Label>
                <Input name='confirm' placeholder='Enter again password...' />
              </FormControl>

              <FlexLayout className='!items-start'>
                <FlexLayout className='h-5'>
                  <Checkbox name='terms'></Checkbox>
                </FlexLayout>
                <div className='ml-3 text-sm'>
                  <Label className='select-none text-gray-500' name='terms'>
                    I accept the policy and terms
                  </Label>
                </div>
              </FlexLayout>

              <Button customClass='w-full'>Create an account</Button>

              <Typography
                as='p'
                className='text-sm font-light text-gray-500 dark:text-gray-400'
              >
                Already have an account?
                <Link
                  to='/login'
                  className='font-medium text-blue-600 hover:underline dark:text-primary-500'
                >
                  Login here
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </FlexLayout>
    </section>
  );
};

export default Register;
