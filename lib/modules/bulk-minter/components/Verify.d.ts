/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
import { MintDispatch } from '../index';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    dispatch: MintDispatch;
    onClose: () => void;
    track: any;
}
export default function Verify({ previousStep, nextStep, dispatch, goToStep, files, onClose, track, }: Props): JSX.Element;
export {};
