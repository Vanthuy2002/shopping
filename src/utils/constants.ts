import {
  FormValidateProps,
  PriceConvert,
  ProductItemsProps,
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
const randomPrice = (Math.random() * 10).toFixed(2);

export const imagesPlaceholder = 'https://placehold.co/600x400?text=Products';

export const getNewPrice = (
  oldPrice: PriceConvert,
  discount?: PriceConvert
): PriceConvert => {
  if (oldPrice && discount) {
    const newPrice = oldPrice - discount;
    return newPrice;
  }
  return oldPrice;
};

export const fakeData: ProductItemsProps = {
  id: createUUID(),
  title: 'Product title',
  desc: 'Lorem ipsum dolor sit amet.',
  image: imagesPlaceholder,
  price: randomPrice,
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
