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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { messValidate } from 'src/utils/constants';
import { useState } from 'react';

const { email, password, required } = messValidate;
const schema = yup.object({
  email: yup.string().required(required).email(email),
  password: yup.string().required(required).min(8, password),
});

type LoginProps = yup.InferType<typeof schema>;

const Login = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(schema),
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const handleLogin = (values: LoginProps) => {
    console.log({ ...values, remember });
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <FlexLayout className='flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        {/* Logo */}
        <WebBrand className='mb-6' />

        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <Typography className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </Typography>

            <form
              className='space-y-4 md:space-y-6'
              autoComplete='off'
              onSubmit={handleSubmit(handleLogin)}
            >
              <FormControl>
                <Label name='email'>Your email</Label>
                <Input
                  id='email'
                  {...register('email')}
                  placeholder='Enter your email...'
                />
                {errors && errors.email?.message && (
                  <FormErr>{errors.email.message}</FormErr>
                )}
              </FormControl>

              <FormControl>
                <Label name='password'>Your Password</Label>
                <Input
                  id='password'
                  {...register('password')}
                  placeholder='Enter your password...'
                />
                {errors && errors.password?.message && (
                  <FormErr>{errors.password.message}</FormErr>
                )}
              </FormControl>

              <FlexLayout className='justify-between'>
                <div className='flex items-start'>
                  <FlexLayout className='h-5'>
                    <Checkbox
                      id='remember'
                      checked={remember}
                      onChange={handleCheck}
                    />
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
