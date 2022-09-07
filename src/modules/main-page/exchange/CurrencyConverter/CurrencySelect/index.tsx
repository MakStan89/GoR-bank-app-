import * as React from "react";
import { useState } from "react";
import cn from "classnames";
import { SelectItem } from "../SelectItem";
import { currencies } from "../../constants";
import { CurrencySelectItem } from "./types";
import "./styles.scss";

export const CurrencySelect = ({
  currentCurrency,
  onSelect,
}: CurrencySelectItem) => {
  const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);

  const optionsCurrencies = currencies.map((obj) => (
    <div
      key={obj.id}
      className="options-currency-container"
      onClick={() => handleChooseCurrency(obj.id)}
    >
      <SelectItem name={obj.name} fullName={obj.fullName} image={obj.image} />
    </div>
  ));

  const handleOptionsOpen = () => {
    setOptionsOpen(!isOptionsOpen);
  };

  const fetchCurrencyInfo = (id: number) => {
    onSelect(currencies.filter((obj) => obj.id === id)[0]);
  };

  const handleChooseCurrency = (id: number) => {
    fetchCurrencyInfo(id);
    setOptionsOpen(!isOptionsOpen);
  };

  const selectClassName = cn(
    isOptionsOpen ? "options-container-open" : "options-container"
  );

  return (
    <>
      <div className="select-container" onClick={handleOptionsOpen}>
        <div className="select-content">
          <SelectItem
            image={currentCurrency.image}
            name={currentCurrency.name}
            fullName={currentCurrency.fullName}
          />
        </div>
        <div className="select-arrow"></div>
      </div>
      <div className={selectClassName}>{optionsCurrencies}</div>
    </>
  );
};
