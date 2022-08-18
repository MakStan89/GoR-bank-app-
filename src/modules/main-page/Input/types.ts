export type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  text: string;
  requestError: boolean;
  onValidly: (v: boolean) => void;
  onValue: (v: string) => void;
};
