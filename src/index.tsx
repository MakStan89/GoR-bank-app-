import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { StartPage } from './modules/start-page';
import { MainPage } from './modules/main-page';
import { Header } from './modules/template-page/header';
import './index.scss';
import { useState } from 'react';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

let isAuth = true;
const logout = () => isAuth = false;
//let [isAuth, setIsAuth] = useState(true);
//const logout = () => setIsAuth(isAuth = false)
export const AuthContext = React.createContext({ isAuth: true, fn: () => { } });

root.render(
  <BrowserRouter>
    <AuthContext.Provider value={{ isAuth: isAuth, fn: logout }}>
      <Header />
      {!isAuth && (<StartPage />)}
      {isAuth && (<MainPage />)}
    </AuthContext.Provider>
  </BrowserRouter>
);
