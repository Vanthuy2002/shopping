const Progress = ({ width = 0 }: { width: number }) => {
  return (
    <div className='w-full h-1 my-4 bg-gray-200 rounded-md dark:bg-gray-700'>
      <div
        className='h-1 bg-blue-600 rounded-full dark:bg-blue-500'
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Progress;
