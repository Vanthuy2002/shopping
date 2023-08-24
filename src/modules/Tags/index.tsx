const Tags = ({ text }: { text: string }) => {
  return (
    <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300'>
      {text}
    </span>
  );
};

export default Tags;
