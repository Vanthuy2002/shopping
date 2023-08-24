import React from 'react';

export type ChildProps = React.ReactNode;

export interface contactsListProps {
  contact: string[];
  link: string[];
}

export type HTMLHeadingTag = Extract<
  keyof JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
>;

export type TypoAsHeading = {
  children: ChildProps;
  as?: HTMLHeadingTag;
} & JSX.IntrinsicElements[HTMLHeadingTag];

export interface FlexProps {
  children: ChildProps;
  gap: string | number;
  className: string;
}
export interface FormValidateProps {
  required: string;
  email: string;
  password: string;
  regexMess: string;
  checkboxMess: string;
}

export type IEvents = React.ChangeEvent<HTMLInputElement>;
export type IEventAllTags = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface RoleProps {
  USER: string;
  ADMIN: string;
  SELLER: string;
}

// defined user status type
export interface UserStatusProps {
  ACTIVE: string;
  PENDING: string;
  BANNER: string;
}

export type UserUpdate = {
  id: string;
  email: string;
  password: string;
  terms: boolean;
  username: string;
  firstname: string;
  lastname: string;
  phone: string;
  addr: string;
  newpassword: string;
  confirm: string;
  desc: string;
  imageStore: string;
} & RoleProps &
  UserStatusProps;

export interface ReponseFromApi {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isCart: boolean;
}
export type PriceConvert = number | undefined;

export interface ListProps {
  label: string;
  tag?: string;
  className?: string;
  isButton?: boolean;
}

export interface ItemCartProps {
  productId: number;
  quantity: number;
}

export interface CartProps {
  id: number;
  user_id: string;
  items: ItemCartProps[];
}

export interface TypeSideBarMenu {
  id: string;
  title: string;
  to: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}
