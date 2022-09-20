import * as React from "react"
import { IconType } from "./types";

export const PaymentsIcon = ({ isWhite = false }: IconType) => {
  const colorTheme = isWhite ? '#FFFFFF' : '#616161';

  return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_18807_47684)">
        <path d="M19.0002 13.081V16L24.3335 12L19.0002 8V10.919L7.00016 10.919V13.081L19.0002 13.081Z" fill={colorTheme} />
        <path d="M11.9999 20.0004H5.99992V4.00006H11.9999V9.00021H14L13.9998 4.00006C13.9998 2.9 13.0998 2 11.9998 2L1.99989 2.00017C0.900002 2.00017 0 2.90017 0 4.00006V19.9999C0 21.1 0.900002 22 2.00006 22H11.9999C13.1 22 14 21.1 14 19.9999V14.9998H11.9999L11.9999 20.0004ZM3.99978 20.0004H1.99971V4.00006H3.99978V20.0004Z" fill={colorTheme} />
        <path d="M7 15H9V19H7V15Z" fill={colorTheme} />
      </g>
      <defs>
        <clipPath id="clip0_18807_47684">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
