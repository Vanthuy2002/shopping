import { createUUID } from 'src/utils/constants';

type selectType = {
  options?: { title: string; value: string }[];
  heading: string;
} & JSX.IntrinsicElements['select'];

const Select = ({ options, heading, ...props }: selectType) => {
  return (
    <select
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      {...props}
    >
      <option defaultValue={heading}>{heading}</option>
      {options &&
        options?.length > 0 &&
        options?.map((option) => (
          <option key={createUUID()} value={option.value}>
            {option.title}
          </option>
        ))}
    </select>
  );
};

export default Select;
