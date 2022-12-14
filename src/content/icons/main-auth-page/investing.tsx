import * as React from "react"
import { IconType } from "./types";

export const InvestingIcon = ({ isWhite = false }: IconType) => {
  const colorTheme = isWhite ? '#FFFFFF' : '#616161';

  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 13.4898L7.5 7.47976L11.5 11.4798L20 1.91977L18.59 0.509766L11.5 8.47976L7.5 4.47976L0 11.9898L1.5 13.4898Z" fill={colorTheme} />
    </svg>
  )
}
