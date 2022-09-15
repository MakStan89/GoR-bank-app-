import { FormDataProps } from '../../../hooks/useFormValidation/types';

export type Props = {
  onNextStep: (values: FormDataProps) => void;
  onJoin?: () => void;
  telephone?: string;
  clientStatus?: (status: boolean) => void;
};
