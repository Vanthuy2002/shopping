import FlexLayout from 'src/Layout/Flex';
import Typo from '../Typo';
import { contactList, createUUID } from 'src/utils/constants';

const Contacts = () => {
  return (
    <FlexLayout className='justify-between w-full max-w-screen-xl py-4 mx-auto'>
      <FlexLayout className='gap-4'>
        {contactList.contact.map((item) => (
          <Typo key={createUUID()} as='span'>
            {item}
          </Typo>
        ))}
      </FlexLayout>

      <FlexLayout className='gap-4'>
        {contactList.link.map((item) => (
          <Typo key={createUUID()} className='text-[#6a983c]' as='span'>
            {item}
          </Typo>
        ))}
      </FlexLayout>
    </FlexLayout>
  );
};

export default Contacts;
