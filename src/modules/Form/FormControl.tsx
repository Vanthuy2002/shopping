import { ChildProps } from 'src/utils/types';

const FormControl = ({
  children,
  className,
}: {
  children: ChildProps;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export default FormControl;
