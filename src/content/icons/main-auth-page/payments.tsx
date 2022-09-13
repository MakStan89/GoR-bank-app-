import * as React from "react"
import { IconType } from "./types";

export const PaymentsIcon = ({ isWhite = false }: IconType) => {
   const colorTheme = isWhite ? '#FFFFFF' : '#616161';

   return (
      <svg
         width="21"
         height="27"
         viewBox="0 0 14 20"
         fill="none"
         version="1.1"
         id="svg4"
         xmlns="http://www.w3.org/2000/svg">
         <defs
            id="defs8" />
         <path
            d="M 6.9312509,14.72667 H 3.4536606 V 4.078893 H 6.9312509 V 7.4063531 H 8.0905095 L 8.0903935,4.078893 c 0,-0.7320577 -0.5216402,-1.3309837 -1.1592006,-1.3309837 L 1.135242,2.7480208 c -0.63749542,0 -1.15913686,0.5989256 -1.15913686,1.3308722 v 10.647444 c 0,0.732086 0.52164144,1.331011 1.15923536,1.331011 h 5.7959104 c 0.6376183,0 1.1592586,-0.598925 1.1592586,-1.331011 V 11.398912 H 6.9312509 Z m -4.6368721,0 H 1.1351376 V 4.078893 h 1.1592412 z"
            fill={colorTheme}
            id="path2"
            style={{ strokeWidth: 0.621054 }} />
         <path
            d="m 10.95183,10.098179 v 1.942485 L 14.043013,9.3787771 10.95183,6.7168891 v 1.942486 H 3.9966048 v 1.4388039 z"
            fill={colorTheme}
            id="path114"
            style={{ strokeWidth: 0.621054 }} />
         <path
            d="m 4.0222277,11.418921 h 1.1592006 v 2.661888 H 4.0222277 Z"
            fill={colorTheme}
            id="path122"
            style={{ strokeWidth: 0.621054}} />
      </svg>
   )
}
