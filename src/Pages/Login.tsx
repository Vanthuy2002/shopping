import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import WebBrand from 'src/components/Brand';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import Checkbox from 'src/modules/Checkbox';
import { FormControl } from 'src/modules/Form';
import FormErr from 'src/modules/Form/FormErr';
import Input from 'src/modules/Input';
import Label from 'src/modules/Label';

const Login = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <FlexLayout className='flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        {/* Logo */}
        <WebBrand className='mb-6'></WebBrand>

        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <Typography className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </Typography>

            <form className='space-y-4 md:space-y-6'>
              <FormControl>
                <Label name='email'>Your email</Label>
                <Input
                  id='email'
                  name='email'
                  placeholder='Enter your email...'
                />
                <FormErr>This field is required</FormErr>
              </FormControl>

              <FormControl>
                <Label name='email'>Your Password</Label>
                <Input
                  id='password'
                  name='password'
                  placeholder='Enter your password...'
                />
                <FormErr>This field is required</FormErr>
              </FormControl>

              <FlexLayout className='justify-between'>
                <div className='flex items-start'>
                  <FlexLayout className='h-5'>
                    <Checkbox name='remember'></Checkbox>
                  </FlexLayout>
                  <div className='ml-3 text-sm'>
                    <Label name='remember' className='select-none'>
                      Remember me
                    </Label>
                  </div>
                </div>

                <Link
                  to='/something'
                  className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
                >
                  Forgot password?
                </Link>
              </FlexLayout>
              <Button customClass='w-full'>Login</Button>
              <Typography
                as='p'
                className='text-sm font-light text-gray-500 dark:text-gray-400'
              >
                Don’t have an account yet?
                <Link
                  to='/register'
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                >
                  Register now
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </FlexLayout>
    </section>
  );
};

export default Login;
