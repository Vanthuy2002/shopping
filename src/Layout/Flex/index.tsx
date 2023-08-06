import classNames from 'classnames';
import { FlexProps } from 'src/utils/types';

type FlexLayoutProps = Partial<FlexProps>;

const FlexLayout = ({ children, className = '' }: FlexLayoutProps) => {
  return (
    <div className={classNames(`flex items-center`, className)}>{children}</div>
  );
};

export default FlexLayout;
