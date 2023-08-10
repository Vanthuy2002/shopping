import Typography from 'src/components/Typography';
import { ChildProps } from 'src/utils/types';

const FormErr = ({ children }: { children: ChildProps }) => {
  return (
    <Typography className='text-red-500 text-xs mt-1' as='span'>
      {children}
    </Typography>
  );
};

export default FormErr;
