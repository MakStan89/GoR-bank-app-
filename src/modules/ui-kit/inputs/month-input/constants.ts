export const name = "income";
export const minLength = 3;
export const maxLength = 20;
export const englishLanguage = {
  placeholderText: "Enter salary income",
  errorsText: [
    "",
    "Включен CapsLock",
    "Введите более 3 символов",
    "EIN must contain numbers only",
    "",
  ],
} as const;
