import * as React from "react"
import { IconType } from "./types";

export const DealsAndOffersIcon = ({ isWhite = false }: IconType) => {
   const colorTheme = isWhite ? '#FFFFFF' : '#616161';

   return (
   <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      version="1.1"
      id="svg184"
      xmlns="http://www.w3.org/2000/svg">
   <defs
      id="defs188" />
   <path
      d="M19.41 9.58L10.41 0.58C10.05 0.22 9.55 0 9 0H2C0.9 0 0 0.9 0 2V9C0 9.55 0.22 10.05 0.59 10.42L9.59 19.42C9.95 19.78 10.45 20 11 20C11.55 20 12.05 19.78 12.41 19.41L19.41 12.41C19.78 12.05 20 11.55 20 11C20 10.45 19.77 9.94 19.41 9.58ZM11 18.01L2 9V2H9V1.99L18 10.99L11 18.01Z"
      fill={colorTheme}
      id="path182" />
   <path
      d="m 4.4205496,5.9205496 c 0.82843,0 1.5,-0.67157 1.5,-1.5 0,-0.828427 -0.67157,-1.5 -1.5,-1.5 -0.828427,0 -1.5,0.671573 -1.5,1.5 0,0.82843 0.671573,1.5 1.5,1.5 z"
      fill={colorTheme}
      id="path2" />
   </svg>
   )
}
