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
  price: number;
}
