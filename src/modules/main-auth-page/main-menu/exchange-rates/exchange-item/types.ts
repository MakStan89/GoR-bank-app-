export type ItemCurrency = {
  id?: number;
  name: string;
  fullName: string;
  image: string;
  buying: number;
  selling: number | string;
  sign?: string;
};
