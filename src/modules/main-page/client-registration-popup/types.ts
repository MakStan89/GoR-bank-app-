export type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export type FormDataProps = {
  answer?: string;
  confirm_password?: string;
  password?: string;
  question?: string;
  questions?: string;
  sms_code?: string;
  telephone?: string;
};

export type FormValidityProps = {
  answer?: boolean;
  confirm_password?: boolean;
  password?: boolean;
  question?: boolean;
  questions?: boolean;
  sms_code?: boolean;
  telephone?: boolean;
};
