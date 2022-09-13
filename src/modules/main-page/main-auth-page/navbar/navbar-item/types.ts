import { ReactNode } from "react";

export type NavbarType = {
  path: string;
  image?: string | ReactNode;
  imageSelect?: string;
  name: string;
  isActive: boolean;
  isHidden: boolean;
};
