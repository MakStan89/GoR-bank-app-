export const russianLanguage = {
  capsLockError: 'Включен CapsLock',
  spaceError: 'Вы ввели недопустимые символы',
  telephoneError: 'Введите корректный номер',
  passwordErrors: {
    lengthError: 'Пароль должен содержать более 6-ти символов',
    validityError:
      'Пароль должен содержать не менее 6-ти символов, в том числе цифры, прописные и строчные буквы латинского алфавита',
    requestError: 'Неверный логин или пароль',
  },
  passportErrors: {
    lengthError: 'Введите более 3 символов',
    validityError: 'Использованы недопустимые символы',
  },
} as const;
