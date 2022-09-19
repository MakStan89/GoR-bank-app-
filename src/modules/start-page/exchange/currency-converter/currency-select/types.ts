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
  onSelect: (dataCurrency: {
    id?: number;
    name: string;
    fullName: string;
    image: string;
    buying: number;
    selling: number | string;
    sign?: string;
  }) => void;
};
