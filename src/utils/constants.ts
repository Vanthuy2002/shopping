import { FormValidateProps, contactsListProps } from './types';

export const contactList: contactsListProps = {
  contact: ['Chat with us', '+420 336 775 664', 'info@freshnesecom.com'],
  link: ['Blog', 'About Us', 'Take care'],
};

export const messValidate: FormValidateProps = {
  email: 'This field must be an email',
  password: 'Password must be less than 8 characters',
  required: 'This field is required',
  regexMess: 'Can not contains special characters',
  checkboxMess: 'Plesea agree terms and policy',
};

export const regexPassword = /^[a-zA-Z0-9\s]*$/;

export const createUUID = () => crypto.randomUUID();
