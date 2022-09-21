import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StartPage } from "./modules/start-page";
import { MainPage } from "./modules/main-page";
import "./index.scss";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const isAuth = false;

root.render(
  <HashRouter>
    {!isAuth && <StartPage />}
    {isAuth && <MainPage />}
  </HashRouter>
);
