import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StartPage } from './modules/start-page';
import { MainPage } from './modules/main-page';
import './index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const isAuth = true;

root.render(
  <BrowserRouter>
    {!isAuth && <StartPage />}
    {isAuth && <MainPage />}
  </BrowserRouter>
);
