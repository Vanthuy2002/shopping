import React from 'react';

export type ChildProps = React.ReactNode;

export interface contactsListProps {
  contact: string[];
  link: string[];
}

type HTMLHeadingTag = Extract<
  keyof JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
>;

export type TypographyAsHeading = {
  children: ChildProps;
  as?: HTMLHeadingTag;
} & JSX.IntrinsicElements[HTMLHeadingTag];

export interface FlexProps {
  children: ChildProps;
  gap: string | number;
  className: string;
}

export interface ProductItemsProps {
  id: string;
  title: string;
  desc: string;
  image: string;
  price: number | string;
}

export interface FormValidateProps {
  required: string;
  email: string;
  password: string;
  regexMess: string;
  checkboxMess: string;
}

export type IEvents = React.ChangeEvent<HTMLInputElement>;

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
}

export type PriceConvert = number | undefined;
