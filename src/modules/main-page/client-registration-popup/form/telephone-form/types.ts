export type Props = {
  next: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setTelephone: (v: string) => void;
  onJoin: () => void;
  formData?: any;
  changeFormData?: any;
  isOpen: boolean;
};
