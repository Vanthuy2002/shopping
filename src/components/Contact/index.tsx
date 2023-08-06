import FlexLayout from 'src/Layout/Flex';
import Typography from '../Typography';
import { contactList, createUUID } from 'src/utils/constants';

const Contacts = () => {
  return (
    <FlexLayout className='justify-between w-full max-w-screen-xl py-4 mx-auto'>
      <FlexLayout className='gap-4'>
        {contactList.contact.map((item) => (
          <Typography key={createUUID()} as='span'>
            {item}
          </Typography>
        ))}
      </FlexLayout>

      <FlexLayout className='gap-4'>
        {contactList.link.map((item) => (
          <Typography key={createUUID()} className='text-[#6a983c]' as='span'>
            {item}
          </Typography>
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};

export default Contacts;
