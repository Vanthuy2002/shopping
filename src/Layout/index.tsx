import { ChildProps } from 'src/utils/types';
import Header from './Header';

interface LayoutProps {
  children?: ChildProps;
}

const CurrentLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default CurrentLayout;
