import classNames from 'classnames';

type InputProps = {
  customClass?: string;
} & JSX.IntrinsicElements['input'];

const Input = ({ customClass = '', ...props }: InputProps) => {
  return (
    <input
      className={classNames(
        'bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
        customClass
      )}
      {...props}
    />
  );
};

export default Input;
