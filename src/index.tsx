import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StartPage } from './modules/start-page';
import { MainPage } from './modules/main-page';
import './index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let isAuth = true;
const logOut = () => isAuth = false;
export const AuthContext = React.createContext({ isAuth: true, fn: () => { } });

root.render(
  <BrowserRouter>
    <AuthContext.Provider value={{isAuth: true, fn: logOut }}>
      {!isAuth && (
        <StartPage />
      )}
      {isAuth && (
        <MainPage />
      )}
    </AuthContext.Provider>
    
  </BrowserRouter>
);
