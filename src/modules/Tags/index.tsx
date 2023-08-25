import classNames from 'classnames';

const variantClass = {
  active: 'bg-blue-100 text-blue-800',
  banner: 'bg-red-400 text-white',
  pending: 'bg-yellow-200 text-white',
};

const Tags = ({
  text,
  variant = 'active',
}: {
  text: string;
  variant?: 'active' | 'banner' | 'pending';
}) => {
  return (
    <span
      className={classNames(
        'text-sm font-medium mr-2 px-3 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300',
        variantClass[variant]
      )}
    >
      {text}
    </span>
  );
};

export default Tags;
