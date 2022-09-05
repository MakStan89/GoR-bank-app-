import { FormDataProps } from '../types';
export type Props = {
  onClose: () => void;
  onBack: () => void;
  onNextStep: (values: FormDataProps) => void;
  onJoin: () => void;
  formData: FormDataProps;
  currentStep: number;
};
