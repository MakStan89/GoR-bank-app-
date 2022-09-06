import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './main';
import { Contacts } from './contacts/index';

export const MainPage = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);

