import { FormDataProps } from '../types';

export type Props = {
  onNextStep: (v: FormDataProps) => void;
  onJoin?: () => void;
  telephone?: string;
};
