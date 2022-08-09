/// <reference types="react" />
import { FormInstance } from 'antd';
import { StepWizardChildProps } from 'react-step-wizard';
import { FilePreview, MintDispatch } from '../index';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    index: number;
    form: FormInstance;
    onClose: () => void;
    currentFile: File;
    isLast: boolean;
    dispatch: MintDispatch;
}
export default function InfoScreen({ previousStep, goToStep, files, index, nextStep, form, isActive, onClose, filePreviews, isLast, dispatch, currentFile, }: Props): JSX.Element | null;
export {};
