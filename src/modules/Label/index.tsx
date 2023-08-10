import classNames from 'classnames';
import { ChildProps } from 'src/utils/types';

const Label = ({
  children,
  name,
  className = '',
}: {
  children: ChildProps;
  name?: string;
  className?: string;
}) => {
  return (
    <label
      htmlFor={name}
      className={classNames(
        'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
