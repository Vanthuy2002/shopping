import { Link, useNavigate } from 'react-router-dom';
import Label from '../modules/Label';
import Input from '../modules/Input';
import FlexLayout from 'src/Layout/Flex';
import Checkbox from 'src/modules/Checkbox';
import Button from 'src/modules/Button';
import Typo from 'src/components/Typo';
import { FormControl } from 'src/modules/Form';
import WebBrand from 'src/components/Brand';
import FormErr from 'src/modules/Form/FormErr';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  imagesPlaceholder,
  messValidate,
  regexPassword,
  roleUser,
  userStatus,
} from 'src/utils/constants';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from 'src/firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';

const { email, password, required, regexMess, checkboxMess } = messValidate;
const schema = yup.object({
  username: yup.string().required(required).matches(regexPassword, regexMess),
  email: yup.string().required(required).email(email),
  password: yup.string().required(required).min(8, password),
  terms: yup.bool().required().oneOf([true], checkboxMess),
});

type RegisterData = yup.InferType<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleRegister = async (values: RegisterData) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: values.username,
          photoURL: imagesPlaceholder,
        });
      } else {
        toast.warn('Can not update profile user');
      }

      const userRef = collection(db, 'user');
      await addDoc(userRef, {
        ...values,
        status: userStatus.ACTIVE,
        role: [roleUser.USER],
        createdAt: serverTimestamp(),
      });

      toast.success('Create user successfully!!');
      navigate('/');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <FlexLayout className='flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <WebBrand className='mb-6' />

        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <Typo className='text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white'>
              Create and account
            </Typo>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className='space-y-4 md:space-y-6'
              autoComplete='off'
            >
              <FormControl>
                <Label name='username'>Username</Label>
                <Input
                  {...register('username')}
                  id='username'
                  placeholder='Enter your username...'
                />
                {errors && errors.username?.message && (
                  <FormErr>{errors.username.message}</FormErr>
                )}
              </FormControl>

              <FormControl>
                <Label name='email'>Your email</Label>
                <Input
                  {...register('email')}
                  id='email'
                  placeholder='Enter your email...'
                />
                {errors && errors.email?.message && (
                  <FormErr>{errors.email.message}</FormErr>
                )}
              </FormControl>

              <FormControl>
                <Label name='password'>Your Password</Label>
                <Input
                  {...register('password')}
                  id='password'
                  type='password'
                  placeholder='********'
                />
                {errors && errors.password?.message && (
                  <FormErr>{errors.password.message}</FormErr>
                )}
              </FormControl>

              <FlexLayout className='!items-start'>
                <FlexLayout className='h-5'>
                  <Checkbox {...register('terms')} id='terms' />
                </FlexLayout>
                <div className='ml-3 text-sm'>
                  <Label
                    className={`select-none ${
                      errors.terms?.message ? 'text-red-500' : 'text-black'
                    }`}
                    name='terms'
                  >
                    I accept terms and policy
                  </Label>
                </div>
              </FlexLayout>

              <Button size='lg' disabled={isSubmitting} customstyles='w-full'>
                Create an account
              </Button>

              <Typo
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
              </Typo>
            </form>
          </div>
        </div>
      </FlexLayout>
    </section>
  );
};

export default Register;
