import { ReactNode } from 'react';

export type NavbarType = {
  path: string;
  image?: ReactNode;
  name: string;
  isActive: boolean;
  isHidden: boolean;
};
