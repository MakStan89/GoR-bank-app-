import * as React from "react"
import { IconType } from "./types";

export const InsuranceIcon = ({ isWhite = false }: IconType) => {
   const colorTheme = isWhite ? '#FFFFFF' : '#616161';

   return (
      <svg
         width="20"
         height="20"
         viewBox="0 0 20 20"
         fill="none"
         version="1.1"
         id="svg4"
         xmlns="http://www.w3.org/2000/svg">
         <defs
            id="defs8" />
         <path
            d="m 18,3.9522103 h -4 v -2 C 14,0.85221027 13.1,-0.04778973 12,-0.04778973 H 8 c -1.1,0 -2,0.9 -2,2.00000003 v 2 H 2 c -1.1,0 -2,0.9 -2,2 V 17.95221 c 0,1.1 0.9,2 2,2 h 16 c 1.1,0 2,-0.9 2,-2 V 5.9522103 c 0,-1.1 -0.9,-2 -2,-2 z m -10,-2 h 4 v 2 H 8 Z M 18,17.95221 H 2 V 5.9522103 h 16 z"
            fill={colorTheme}
            id="path2" />
         <path
            d="M 11.035843,7.8518518 H 9.0358423 v 3.0000002 h -3 v 2 h 3 v 3 h 2.0000007 v -3 h 3 v -2 h -3 z"
            fill={colorTheme}
            id="path177"
            inkscape:transform-center-x="0.023894867" />
      </svg>
   )
}
