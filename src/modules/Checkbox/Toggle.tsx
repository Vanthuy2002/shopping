import classNames from 'classnames';
import Typography from 'src/components/Typography';

interface ToggleProps {
  text: string;
  name: string;
}

const Toggle = ({ text, name }: ToggleProps) => {
  return (
    <label className='relative inline-flex items-center mb-4 cursor-pointer'>
      <input type='checkbox' name={name} id={name} className='sr-only peer' />
      <div
        className={classNames(
          "w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        )}
      ></div>
      <Typography
        as='span'
        className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {text}
      </Typography>
    </label>
  );
};

export default Toggle;