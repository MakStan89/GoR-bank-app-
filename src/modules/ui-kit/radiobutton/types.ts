export type Props = {
  name: string;
  checked: boolean;
  text: string;
  onClick: () => void;
  defaultColor: number;
  checkedColor: number;
};

export enum RadioButtonColor {
  Black = 0,
  Gray = 1,
  Yellow = 2,
}
