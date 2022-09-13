import * as React from "react"
import { IconType } from "./types";

export const TransfersIcon = ({ isWhite = false }: IconType) => {
   const colorTheme = isWhite ? '#FFFFFF' : '#616161';

   return (
      <svg
         width="20"
         height="24"
         viewBox="0 0 10 14"
         fill="none"
         version="1.1"
         id="svg4"
         xmlns="http://www.w3.org/2000/svg">
         <defs
            id="defs8" />
         <path
            d="M 3.1015695,3.2406949 H 0.85156946 l 2.50000004,3.5 -2.50000004,3.5000001 H 3.1015695 l 2.5,-3.5000001 z"
            fill={colorTheme}
            id="path2"
            style={{ strokeWidth: 0.5 }} />
         <path
            d="m 6.7348651,3.2652461 h -2.25 l 2.5,3.5 -2.5,3.4999999 h 2.25 L 9.2348652,6.7652461 Z"
            fill={colorTheme}
            id="path2-4"
            style={{ strokeWidth: 0.5 }}
            inkscape:transform-center-x="0.42578473"
            inkscape:transform-center-y="-0.023654707" />
      </svg>
   )
}
