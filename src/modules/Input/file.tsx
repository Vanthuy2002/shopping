import { IEvents } from 'src/utils/types';
import { Fragment, useState } from 'react';
import Label from '../Label';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from 'src/firebase/config';
import { toast } from 'react-toastify';
import Progress from '../Effect/Progress';
import Button from '../Button';
import { useForm } from 'react-hook-form';

const FileUpload = ({
  setPath,
}: {
  setPath: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const metadata = {
    contentType: 'image/jpg',
  };
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const { setValue, getValues } = useForm();

  const handleUploadImage = (file: File) => {
    setIsUpload(true);
    const storageRef = ref(storage, 'avatar/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            toast.error(error.message);
            break;
          case 'storage/canceled':
            toast.error(error.message);
            break;

          case 'storage/unknown':
            toast.error(error.message);
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPath(downloadURL);
          setIsUpload(false);
        });
      }
    );
  };

  const handleChangeImage = (e: IEvents) => {
    const file = e.target.files && e.target.files[0];
    handleUploadImage(file as File);
    setValue('avatars', file?.name);
  };

  const handleRemoveImage = () => {
    const imageRef = ref(storage, `avatar/${getValues('avatars')}`);
    deleteObject(imageRef)
      .then(() => {
        toast.success('Delete file successfully');
        setPath('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      {isUpload ? (
        <Fragment>
          <Progress progress={progress} />
        </Fragment>
      ) : (
        <Fragment>
          <Label
            name='upload'
            className='text-white mr-3 inline-block cursor-pointer my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
          >
            <input
              hidden
              id='upload'
              onChange={handleChangeImage}
              name='upload'
              type='file'
            ></input>
            Upload Image
          </Label>
          <Button size='lg' onClick={handleRemoveImage} variant='remove'>
            Remove
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FileUpload;
