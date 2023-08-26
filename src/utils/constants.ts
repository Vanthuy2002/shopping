import {
  FormValidateProps,
  PriceConvert,
  TypeSideBarMenu,
  contactsListProps,
} from './types';

import {
  ChartPieIcon,
  Squares2X2Icon,
  UserCircleIcon,
  ReceiptPercentIcon,
} from '@heroicons/react/20/solid';

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
    return newPrice.toFixed(0);
  }
  return oldPrice;
};

export const capitalize = (word: string): string => {
  const newCharacter =
    word.charAt(0).toUpperCase() + word.slice(1).replace(/-/g, ' ');
  return newCharacter;
};

export const roleUser: Record<string, string> = {
  ADMIN: 'Admin',
  SELLER: 'Seller',
  USER: 'User',
};

export const optionsRoles = Object.keys(roleUser).map((key) => ({
  value: key,
  title: roleUser[key],
}));

// results : [{ value: "ADMIN", title: "Admin" },...]

export const userStatus: Record<string, string> = {
  ACTIVE: 'Active',
  PENDING: 'Pending',
  BANNER: 'Banner',
};

export const optionStatus = Object.keys(userStatus).map((key) => ({
  value: key,
  title: userStatus[key],
}));

export const menuSidebar: TypeSideBarMenu[] = [
  {
    id: createUUID(),
    title: 'Dashboard',
    to: 'me/dashboard',
    icon: ChartPieIcon,
  },
  {
    id: createUUID(),
    title: 'Products',
    to: 'me/products',
    icon: Squares2X2Icon,
  },
  {
    id: createUUID(),
    title: 'Discounts',
    to: 'me/discount',
    icon: ReceiptPercentIcon,
  },
  {
    id: createUUID(),
    title: 'Manage User',
    to: 'me/users',
    icon: UserCircleIcon,
  },
];
