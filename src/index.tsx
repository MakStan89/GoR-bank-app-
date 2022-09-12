import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './modules/main-page';
import { MainAuthPage } from './modules/main-page/main-auth-page';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const isAuth = true;

root.render(
  <BrowserRouter>
    {!isAuth && (
      <MainPage />
    )}
    {isAuth && (
      <MainAuthPage />
    )}
  </BrowserRouter>
);
