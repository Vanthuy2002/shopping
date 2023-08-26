import { CloudArrowUpIcon } from '@heroicons/react/20/solid';

const UploadImage = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <CloudArrowUpIcon className='w-6 h-6' />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span>
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            JPG or PNG (MAX. 800x400px)
          </p>
        </div>
        <input id='dropzone-file' type='file' className='hidden' />
      </label>
    </div>
  );
};

export default UploadImage;
