import { ReactNode } from 'react';

export type Props = {
  isAuth: boolean;
  logout: any;
  photo?: ReactNode;
  name: string;
  logoutIcon: ReactNode;
};
