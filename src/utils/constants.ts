import {
  FormValidateProps,
  PriceConvert,
  RoleProps,
  UserStatusProps,
  contactsListProps,
} from './types';

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

export const imagesPlaceholder =
  'https://bootdey.com/img/Content/avatar/avatar1.png';

export const getNewPrice = (
  oldPrice: PriceConvert,
  discount?: PriceConvert
): PriceConvert | string => {
  if (oldPrice && discount) {
    const newPrice = oldPrice - discount;
    return newPrice.toFixed(2);
  }
  return oldPrice;
};

export const capitalize = (word: string): string => {
  const newCharacter =
    word.charAt(0).toUpperCase() + word.slice(1).replace(/-/g, ' ');
  return newCharacter;
};

export const roleUser: RoleProps = {
  ADMIN: 'Admin',
  SELLER: 'Seller',
  USER: 'User',
};

export const userStatus: UserStatusProps = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  BANNER: 'Banner',
};
