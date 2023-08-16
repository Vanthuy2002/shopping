import TextArea from 'src/modules/TextArea';
import Label from 'src/modules/Label';
import Input from 'src/modules/Input';
import Heading from 'src/components/Heading';
import FileUpload from 'src/modules/Input/file';
import Button from 'src/modules/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from 'src/store';
import { IEventAllTags, UserUpdate } from 'src/utils/types';
import { FormControl } from 'src/modules/Form';
import { db } from 'src/firebase/config';
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

type OptionalUser = Partial<UserUpdate>;

const Profile = () => {
  const user = useAppStore((state) => state.users);
  const [userInfo, setUserInfo] = useState<OptionalUser>({});
  const [imagePath, setImagePath] = useState('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();

  const getUserInDb = async () => {
    const docRef = query(
      collection(db, 'user'),
      where('email', '==', user?.email)
    );
    const querySnapshot = await getDocs(docRef);
    querySnapshot.forEach((doc) => {
      setUserInfo({ ...doc.data(), id: doc.id });
    });
  };

  useEffect(() => {
    if (user && user.email) {
      getUserInDb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (imagePath) {
      setUserInfo({ ...userInfo, imageStore: imagePath });
    }
  }, [imagePath]);

  const handleChange = (e: IEventAllTags) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmit(true);
    e.preventDefault();
    try {
      const docRef = doc(db, 'user', userInfo?.id as string);
      await updateDoc(docRef, { ...userInfo });
      toast.success('Update user successfully!!');
      setIsSubmit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='min-h-screen bg-[#dbf0f5]'>
      <section className='max-w-screen-xl py-4 mx-auto sm:px-4'>
        <div className='grid grid-cols-3 gap-5'>
          <article className='pb-3 text-center bg-white rounded-md shadow h-max'>
            <Heading as='h3' title='Profile Picture' />
            <div className='w-40 h-40 mx-auto mt-4'>
              <img
                src={userInfo.imageStore || (user?.photoURL as string)}
                className='object-cover w-full h-full rounded-full'
                alt={user?.displayName as string}
              />
            </div>
            <FileUpload setPath={setImagePath} />
          </article>

          <section className='flex flex-col col-start-2 col-end-4 overflow-auto bg-white rounded-md shadow'>
            <Heading as='h3' title='Personal Details' />
            <form
              className='grid grid-cols-2 p-3 mt-4 gap-7'
              onSubmit={handleUpdateUser}
            >
              <FormControl className='col-start-1 col-end-3'>
                <Label name='username'>Your username</Label>
                <Input
                  name='username'
                  onChange={handleChange}
                  value={userInfo.username}
                  id='username'
                  placeholder='Enter your username...'
                />
              </FormControl>

              <FormControl>
                <Label name='first'>First Name</Label>
                <Input
                  name='firstname'
                  id='first'
                  onChange={handleChange}
                  value={userInfo.firstName}
                  placeholder='Your firstname...'
                />
              </FormControl>

              <FormControl>
                <Label name='last'>Last Name</Label>
                <Input
                  name='lastname'
                  id='last'
                  onChange={handleChange}
                  value={userInfo.lastname}
                  placeholder='Your lastname...'
                />
              </FormControl>

              <FormControl>
                <Label name='phone'>Your phone</Label>
                <Input
                  name='phone'
                  id='phone'
                  onChange={handleChange}
                  value={userInfo.phone}
                  placeholder='Enter your phone...'
                />
              </FormControl>

              <FormControl>
                <Label name='addr'>Your addr</Label>
                <Input
                  name='addr'
                  id='addr'
                  onChange={handleChange}
                  value={userInfo.addr}
                  placeholder='Enter your addr...'
                />
              </FormControl>

              <FormControl className='col-start-1 col-end-3'>
                <Label name='email'>Your email</Label>
                <Input
                  name='email'
                  id='email'
                  onChange={handleChange}
                  value={userInfo.email}
                  placeholder='Enter your email...'
                />
              </FormControl>

              <FormControl>
                <Label name='new'>New Password</Label>
                <Input
                  name='newpassword'
                  id='new'
                  type='password'
                  onChange={handleChange}
                  value={userInfo.newpassword}
                  placeholder='Enter your password...'
                />
              </FormControl>

              <FormControl>
                <Label name='confirm'>Confirm Password</Label>
                <Input
                  name='confirm'
                  id='confirm'
                  onChange={handleChange}
                  value={userInfo.confirm}
                  placeholder='Enter again your password...'
                />
              </FormControl>

              <FormControl className='col-start-1 col-end-3'>
                <Label name='desc'>Description</Label>
                <TextArea
                  name='desc'
                  id='desc'
                  onChange={handleChange}
                  value={userInfo.desc}
                  placeholder='Something about you...'
                />
              </FormControl>

              <FormControl>
                <Button onClick={() => navigate('/')} variant='secondary'>
                  Back
                </Button>
                <Button disabled={isSubmit} type='submit'>
                  Update Profile
                </Button>
              </FormControl>
            </form>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Profile;
