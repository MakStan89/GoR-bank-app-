import { ReactNode } from 'react';

export type Props = {
  isAuth: boolean;
  logOut: any;
  photo?: ReactNode;
  name: string;
  logOutIcon: ReactNode;
};
