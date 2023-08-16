import { IEvents } from 'src/utils/types';
import { useState, Fragment } from 'react';
import Label from '../Label';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/firebase/config';
import { toast } from 'react-toastify';
import Progress from '../Effect/Progress';
import Button from '../Button';

type ImageUpload = {
  isUploading: boolean;
  progress: number;
};

const FileUpload = ({
  setPath,
}: {
  setPath: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [imageUpload, setImageUpload] = useState<ImageUpload>({
    isUploading: false,
    progress: 0,
  });
  const metadata = {
    contentType: 'image/jpeg',
  };

  const handleUploadImage = (file: File) => {
    setImageUpload({ ...imageUpload, isUploading: true });
    const storageRef = ref(storage, 'avatar/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUpload({ ...imageUpload, progress: progress });
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
          setImageUpload({ ...imageUpload, isUploading: false });
        });
      }
    );
  };

  const handleChangeImage = (e: IEvents) => {
    const file = e.target.files && e.target.files[0];
    handleUploadImage(file as File);
  };

  return (
    <Fragment>
      {imageUpload.isUploading ? (
        <Fragment>
          <Progress width={imageUpload.progress} />
          <Button variant='remove'>Remover</Button>
        </Fragment>
      ) : (
        <Label
          name='upload'
          className='text-white inline-block cursor-pointer my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
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
      )}
    </Fragment>
  );
};

export default FileUpload;
