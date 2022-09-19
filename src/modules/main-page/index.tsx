import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../template-page/footer";
import { Header } from "../template-page/header";
import { MainMenu } from "./main-menu";
import { Navbar } from "./navbar";
import { LoanList } from "../loans/loan-products/loan-list";
import { LoanDetails } from "../loans/loan-products/loan-details";
import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/loan_products" element={<LoanList />} />
          <Route path="/loan_products/:id" element={<LoanDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
