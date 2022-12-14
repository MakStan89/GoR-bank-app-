import * as React from "react"
import { IconType } from "./types";

export const MainPageIcon = ({ isWhite = false }: IconType) => {
   const colorTheme = isWhite ? '#FFFFFF' : '#616161';

   return (
      <svg
         width="20"
         height="17"
         viewBox="0 0 20 17"
         fill="none"
         version="1.1"
         id="svg4"
         xmlns="http://www.w3.org/2000/svg">
         <defs
            id="defs8" />
         <path
            d="m 10,2.69 5,4.5 V 15 H 13 V 9 H 7 v 6 H 5 V 7.19 Z M 10,0 0,9 h 3 v 8 h 6 v -6 h 2 v 6 h 6 V 9 h 3 z"
            fill={colorTheme}
            id="path2"
            style={{ display: "inline"}} />
         <path
            fill={colorTheme}
            style={{strokeWidth: "0.0203106" }}
            d="M 3.016129,12.988782 V 8.9877189 L 1.5300954,8.9825094 0.0440618,8.9772999 5.0062057,4.5112829 C 7.7353849,2.0549734 9.9811196,0.04422074 9.9967273,0.04294351 10.012335,0.04166627 12.260001,2.051374 14.99154,4.5089606 l 4.966434,4.4683393 -1.484064,0.00521 -1.484065,0.00521 v 4.0010631 4.001063 h -2.985663 -2.985663 v -2.99582 -2.995818 H 10.002987 8.9874552 v 2.995818 2.995819 H 6.0017921 3.016129 Z M 7.0173238,12.003584 V 9.0077659 h 2.9856632 2.985663 v 2.9958181 2.995819 h 1.015532 1.015531 l -3.31e-4,-3.90472 -3.29e-4,-3.9047188 -2.470666,-2.2240144 C 11.18952,3.7427419 10.05743,2.7290577 10.03263,2.7133182 9.989331,2.6858381 9.8881711,2.7741323 7.4868997,4.9352745 L 4.9862605,7.185848 v 3.906777 3.906778 h 1.0155316 1.0155317 z"
            id="path187" />
      </svg>
   )
}
