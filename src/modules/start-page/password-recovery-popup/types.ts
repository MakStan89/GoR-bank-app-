export type Props = {
  isOpen: boolean;
  onClose: () => void;
  onRegistration: () => void;
};
export enum Steps {
  EnterInfo = 1,
  Success = 2,
  Auth = 3,
}
