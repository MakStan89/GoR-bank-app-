## Технический стек

- Язык программирования - [TypeScript](https://www.typescriptlang.org/)
- Библиотека создания UI - [React](https://reactjs.org/)
- Управление состоянием - [Redux](https://redux.js.org/)
- Сборка модулей проекта - [Webpack](https://webpack.js.org/)

## Система контроля версий

- Cистема контроля версий - [Git](https://git-scm.com/)
- Модель ветвления - [GitHub Flow](https://guides.github.com/introduction/flow/)
- Модель слияния - [Squash and Rebase](https://blog.carbonfive.com/always-squash-and-rebase-your-git-commits/)

## Пакетный менджер

В качестве пакетного менеджера мы используем [npm](https://www.npmjs.com/).

## Версионирование

Для версионирования библиотек и компонентов мы используем принципы [Semantic Versioning](https://semver.org/).

## Качество кода

...

## Тестирование

- Модульное тестирование - [Jest](https://jestjs.io/)

## Архитектура

Архитектура frontend-части современных web-приложений строится на принципах так называемой [Microfrontend-архитектуры](https://martinfowler.com/articles/micro-frontends.html), вариантов реализации которой существует великое [множество](https://martinfowler.com/articles/micro-frontends.html#IntegrationApproaches).

На учебном проекте нам доступен один репозиторий, поэтому мы не сможем разрабатывать полноценный Microfrontend. Но мы будем применять модульный подход, когда каждая "фича" будет храниться в директории **modules** и не будет иметь каких-либо зависимостей от других модулей.
## Структура проекта

Если говорить о подходах в организации файловой структуры проекта, то можно выделить как минимум два наиболее популярных - **структурный** и **feature**-подход.

Первый предпологает создание отдельных директорий основываясь на функциональном предназначении сущности. Например в директории `reducers` хранятся все редьюсеры проекта, в директории `selectors` все селекторы и тд.

Второй является прямым отражением конкретной функциональности проекта. Например форма логина находится в директории `login-form` в которой сосредоточены все необходимые для данной функциональности сущности - `reducers.ts`, `selectors.ts`, `types.ts` и тд.

В наших проектах мы используем **feature**-подход.

Типичная структура директории компонента реализующего отдельную функциональность приложения может выглядеть следующим образом:

```
./modules
  ./login-page
    ./login-form
      action-creators.ts
      action-types.ts
      constants.ts
      create-transfer-on-card.spec.ts
      index.tsx
      reducer.ts
      selectors.ts
      styles.css
      types.ts
```

## Соглашение об именовании

### Файлы

Стиль именования файлов и директорий - [kebab-case](https://ru.wikipedia.org/wiki/Snake_case).

### CSS

Стиль именования классовых css-селекторов и атрибутов - [kebab-case](https://ru.wikipedia.org/wiki/Snake_case).

### Классы и компоненты

Стиль именования классов и компонентов - [CamelCase](https://ru.wikipedia.org/wiki/CamelCase).

### Переменные

Стиль именования переменных - [lowerCamelCase](https://ru.wikipedia.org/wiki/CamelCase).

### Константы

Стиль именования констант которые хранят данные известные до этапа выполнения кода приложения (словари, переменные окружения) - [SCREAMING_SNAKE_CASE](https://ru.wikipedia.org/wiki/Snake_case).

Именование текстовых констант не должно производиться путем перевода текста с русского на английский язык. При этом название должно отображать элемент, частью которого данный текст является. Например: `SEND_BUTTON_TEXT`, `AMOUNT_INPUT_LABEL` и тд.

### Коммиты

Стиль именования коммитов - [Commitlint Config Conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

Коммит должно соответствовать следующим требованиям:

- везде английский язык
- в scope все буквы строчные
- в scope все слова в kebab-case
- в description нет точки в конце описания
- в description первая буква всегда строчная
- в description повелительное наклонение в настоящем времени ("change", а не "changed" или "changes")

## Мониторинг

...

## Производительность

...
