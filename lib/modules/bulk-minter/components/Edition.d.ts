/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
interface Props extends Partial<StepWizardChildProps> {
    images: Array<File>;
    index: number;
    onClose: () => void;
}
export default function Edition({ previousStep, goToStep, images, nextStep, onClose }: Props): JSX.Element;
export {};
