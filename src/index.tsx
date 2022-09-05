import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './modules/main-page/';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
);
