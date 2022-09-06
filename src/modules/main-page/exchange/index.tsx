import * as React from "react";
import { CurrencyItem } from "./CurrencyItem";
import { CurrencyConverter } from "./CurrencyConverter";
import { currencies, englishLanguage } from "./constants";
import { Footer } from "../../template-page/footer";
import { Header } from "../../template-page/header";
import { Title } from "../title";
import "./styles.scss";

export const Exchange = () => {
  const currenciesInfo = currencies.map((obj) => (
    <div key={obj.id} className="currency-item-container">
      <CurrencyItem
        name={obj.name}
        fullName={obj.fullName}
        image={obj.image}
        buying={obj.buying}
        selling={obj.selling}
      />
    </div>
  ));

  return (
    <>
      <Header />
      <div className="container-exchange">
        <Title text={englishLanguage.backButton} title={""} />
        <div className="wrapper-exchange">
          <h5>{englishLanguage.exchangeTitle}</h5>
          <div className="converter">
            <CurrencyConverter />
          </div>
          <div className="table">
            <div className="table-names">
              <p className="currency">{englishLanguage.tableCurrency}</p>
              <p className="buying">{englishLanguage.tableBuying}</p>
              <p className="selling">{englishLanguage.tableSelling}</p>
            </div>
            {currenciesInfo}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
