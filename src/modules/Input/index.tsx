import classNames from 'classnames';
import { forwardRef } from 'react';

export type InputProps = JSX.IntrinsicElements['input'];

const Input = (
  props: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | null
) => {
  return (
    <input
      ref={ref}
      className={classNames(
        'bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      )}
      {...props}
    />
  );
};

export default forwardRef(Input);
