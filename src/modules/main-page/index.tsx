import * as React from 'react';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './auth-page/';
import { Contacts } from './contacts/index';

export const MainPage: FC = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);
