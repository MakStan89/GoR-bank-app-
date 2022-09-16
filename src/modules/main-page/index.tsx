import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainAuthPage } from '../main-auth-page';
import { AuthPage } from './auth-page/';
import { Contacts } from './contacts/';
import { Exchange } from './exchange/';

export const MainPage = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/exchange" element={<Exchange />} />
  </Routes>
);
