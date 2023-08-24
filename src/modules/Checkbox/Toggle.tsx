import classNames from 'classnames';
import Typography from 'src/components/Typography';
import { InputProps } from '../Input';

type ToggleProps = {
  text: React.ReactNode;
  customClass?: string;
} & InputProps;

const Toggle = ({ text, customClass = '', ...props }: ToggleProps) => {
  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input type='checkbox' {...props} className='sr-only peer' />
      <div
        className={classNames(
          "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        )}
      ></div>
      <Typography
        as='span'
        className={classNames(
          'ml-3 hidden sm:block text-sm font-medium text-gray-900 dark:text-gray-300',
          customClass
        )}
      >
        {text}
      </Typography>
    </label>
  );
};

export default Toggle;
