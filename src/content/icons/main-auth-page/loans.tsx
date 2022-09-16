import * as React from "react"
import { IconType } from "./types";

export const LoansIcon = ({ isWhite = false }: IconType) => {
  const colorTheme = isWhite ? '#FFFFFF' : '#616161';

  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0C12.24 0 10 2.24 10 5C10 7.76 12.24 10 15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15 8C13.34 8 12 6.66 12 5C12 3.34 13.34 2 15 2C16.66 2 18 3.34 18 5C18 6.66 16.66 8 15 8ZM18 14H16C16 12.8 15.25 11.72 14.13 11.3L7.97 9H0V20H6V18.56L13 20.5L21 18V17C21 15.34 19.66 14 18 14ZM4 18H2V11H4V18ZM12.97 18.41L6 16.5V11H7.61L13.43 13.17C13.77 13.3 14 13.63 14 14C14 14 12 13.95 11.7 13.85L9.32 13.06L8.69 14.96L11.07 15.75C11.58 15.92 12.11 16 12.65 16H18C18.39 16 18.74 16.24 18.9 16.57L12.97 18.41Z"
        fill={colorTheme} />
    </svg>
  )
}
