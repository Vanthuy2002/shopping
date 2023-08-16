const Progress = ({ progress = 0 }: { progress: number }) => {
  return (
    <div className='w-[90%] mx-auto h-1 my-4 bg-gray-200 rounded-md dark:bg-gray-700'>
      <div
        className='h-1 bg-blue-600 rounded-md dark:bg-blue-500'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
