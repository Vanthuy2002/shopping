import FlexLayout from 'src/Layout/Flex';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { FormControl } from 'src/modules/Form';
import Input from 'src/modules/Input';
import Label from 'src/modules/Label';
import { useAppStore } from 'src/store';

const Profile = () => {
  const user = useAppStore((state) => state.users);

  return (
    <section className='min-h-screen bg-[#dbf0f5]'>
      <section className='max-w-screen-xl py-4 mx-auto sm:px-4'>
        <div className='grid grid-cols-4 gap-5'>
          <article className='p-4 text-center bg-white rounded-md shadow'>
            <div className='w-[90px] h-[90px] mx-auto'>
              <img
                src={user?.photoURL as string}
                className='object-cover w-full h-full rounded-full'
                alt=''
              />
            </div>
            <Typography as='h2' className='mt-4 text-lg font-medium'>
              {user?.displayName}
            </Typography>
            <Typography as='h2' className='mt-3 text-gray-400'>
              {user?.email}
            </Typography>

            <Typography
              as='h2'
              className='mt-4 text-lg font-medium text-blue-500'
            >
              About Me
            </Typography>
            <Typography as='h2' className='mt-3 text-sm text-gray-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              atque rem! Neque autem odit veritatis unde vitae fugiat magnam
              magni!
            </Typography>
          </article>

          <section className='flex flex-col col-start-2 col-end-5 p-3 bg-white rounded-md shadow'>
            <Typography as='h3' className='text-blue-500'>
              Personal Details
            </Typography>

            <form className='grid grid-cols-2 mt-4 gap-7'>
              <FormControl>
                <Label name='username'>Your username</Label>
                <Input
                  value={user?.displayName as string}
                  readOnly
                  id='username'
                  placeholder='Enter your username...'
                />
              </FormControl>

              <FormControl>
                <Label name='email'>Your email</Label>
                <Input
                  readOnly
                  id='email'
                  value={user?.email as string}
                  placeholder='Enter your email...'
                />
              </FormControl>

              <FormControl>
                <Label name='phone'>Your phone</Label>
                <Input
                  readOnly
                  id='phone'
                  value={(user?.phoneNumber as string) || '0964037413'}
                  placeholder='Enter your phone...'
                />
              </FormControl>

              <FormControl>
                <Label name='addr'>Your addr</Label>
                <Input
                  readOnly
                  id='addr'
                  value='Thanh Tri, Ha Noi, Viet Nam'
                  placeholder='Enter your addr...'
                />
              </FormControl>
            </form>

            <FlexLayout className='justify-end mt-auto'>
              <Button variant='secondary'>Back</Button>
              <Button>Update Profile</Button>
            </FlexLayout>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Profile;
