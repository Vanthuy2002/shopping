import Typo from 'src/components/Typo';
import { ChildProps } from 'src/utils/types';

const FormErr = ({ children }: { children: ChildProps }) => {
  return (
    <Typo className='text-red-500 text-xs mt-1' as='span'>
      {children}
    </Typo>
  );
};

export default FormErr;
