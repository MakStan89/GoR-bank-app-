import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../../template-page/footer';
import { Header } from '../../template-page/header';
import { MainMenu } from './main-menu';
import { Navbar } from './navbar';
import styles from './styles.module.scss'

export const MainAuthPage = () => {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Navbar />
        <Routes>
          <Route path="/main" element={<MainMenu />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
