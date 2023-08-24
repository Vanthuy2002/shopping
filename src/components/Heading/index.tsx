import { HTMLHeadingTag } from 'src/utils/types';
import Typo from '../Typo';
import classNames from 'classnames';

interface HeadingProps {
  as: HTMLHeadingTag;
  title: string;
  className?: string;
}

const Heading = ({ as, title, className = '' }: HeadingProps) => {
  return (
    <Typo
      as={as}
      className={classNames(
        'text-blue-500 border border-b-2 border-solid p-4 bg-[#f4f3f4]',
        className
      )}
    >
      {title}
    </Typo>
  );
};

export default Heading;
