export type CurrencySelectItem = {
  currentCurrency: {
    id?: number;
    name: string;
    fullName: string;
    image: string;
    buying: number;
    selling: number | string;
    sign?: string;
  };
  // amountValue: string;
  onSelect: (v: Object) => void;
  // setAmountValue: (v: string) => void;
};

export type CurrentCurrencyItem = {
  id?: number;
  name: string;
  fullName: string;
  image: string;
  buying: number;
  selling: number | string;
  sign?: string;
};
