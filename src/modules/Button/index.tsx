import classNames from 'classnames';
import { ChildProps } from 'src/utils/types';

type ButtonProps = {
  children: ChildProps;
  customstyles?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'remove' | 'light';
} & JSX.IntrinsicElements['button'];

const Button = (props: ButtonProps) => {
  let styleOfVariant = '';
  switch (props.variant) {
    case 'remove':
      styleOfVariant =
        'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
      break;

    case 'secondary':
      styleOfVariant =
        'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900';
      break;

    case 'light':
      styleOfVariant =
        'text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';
      break;
    default:
      styleOfVariant =
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50';
  }
  return (
    <button
      className={classNames(styleOfVariant, props.customstyles)}
      {...props}
    >
      {props.disabled ? 'Loading...' : props.children}
    </button>
  );
};

export default Button;
