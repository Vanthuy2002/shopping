import { useNavigate } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Heading from 'src/components/Heading';
import Button from 'src/modules/Button';
import { FormControl } from 'src/modules/Form';
import Input from 'src/modules/Input';
import FileUpload from 'src/modules/Input/file';
import Label from 'src/modules/Label';
import TextArea from 'src/modules/TextArea';
import { useAppStore } from 'src/store';

const Profile = () => {
  const user = useAppStore((state) => state.users);
  const navigate = useNavigate();

  return (
    <section className='min-h-screen bg-[#dbf0f5]'>
      <section className='max-w-screen-xl py-4 mx-auto sm:px-4'>
        <div className='grid grid-cols-3 gap-5'>
          <article className='text-center bg-white rounded-md shadow pb-3 h-max'>
            <Heading as='h3' title='Profile Picture' />
            <div className='w-40 h-40 mx-auto mt-4'>
              <img
                src={(user?.photoURL as string) || '/avatar.jpg'}
                className='object-cover w-full h-full rounded-full'
                alt={user?.displayName as string}
              />
            </div>
            <FileUpload />
          </article>

          <section className='flex flex-col col-start-2 col-end-4 overflow-auto bg-white rounded-md shadow'>
            <Heading as='h3' title='Personal Details' />
            <form className='grid grid-cols-2 p-3 mt-4 gap-7'>
              <FormControl className='col-start-1 col-end-3'>
                <Label name='username'>Your username</Label>
                <Input
                  value={user?.displayName as string}
                  id='username'
                  placeholder='Enter your username...'
                />
              </FormControl>

              <FormControl>
                <Label name='email'>First Name</Label>
                <Input
                  id='email'
                  value='Thuy'
                  placeholder='Enter your email...'
                />
              </FormControl>

              <FormControl>
                <Label name='email'>Last Name</Label>
                <Input
                  id='email'
                  value='Nguyen'
                  placeholder='Enter your email...'
                />
              </FormControl>

              <FormControl>
                <Label name='phone'>Your phone</Label>
                <Input
                  id='phone'
                  value={(user?.phoneNumber as string) || '0964037413'}
                  placeholder='Enter your phone...'
                />
              </FormControl>

              <FormControl>
                <Label name='addr'>Your addr</Label>
                <Input
                  id='addr'
                  value='Thanh Tri, Ha Noi, Viet Nam'
                  placeholder='Enter your addr...'
                />
              </FormControl>

              <FormControl className='col-start-1 col-end-3'>
                <Label name='email'>Your email</Label>
                <Input
                  id='email'
                  value={user?.email as string}
                  placeholder='Enter your email...'
                />
              </FormControl>

              <FormControl>
                <Label name='password'>Your password</Label>
                <Input
                  id='password'
                  value={user?.uid as string}
                  placeholder='Enter your password...'
                />
              </FormControl>

              <FormControl>
                <Label name='confirm'>Confirm Password</Label>
                <Input
                  id='confirm'
                  value=''
                  placeholder='Enter again your password...'
                />
              </FormControl>

              <FormControl className='col-start-1 col-end-3'>
                <Label name='desc'>Description</Label>
                <TextArea
                  id='desc'
                  value='Some description...'
                  placeholder='Something about you...'
                />
              </FormControl>
            </form>

            <FlexLayout className='justify-end mt-auto mb-2'>
              <Button onClick={() => navigate('/')} variant='secondary'>
                Back
              </Button>
              <Button>Update Profile</Button>
            </FlexLayout>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Profile;
