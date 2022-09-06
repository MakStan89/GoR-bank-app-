export type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export enum Steps {
  EnterTelephone = 0,
  Success = 4,
  Auth = 5,
}
