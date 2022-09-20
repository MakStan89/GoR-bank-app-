import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './auth-page/';
import { Contacts } from './contacts/';
import { Exchange } from './exchange/';

export const StartPage = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/exchange" element={<Exchange />} />
  </Routes>
);
