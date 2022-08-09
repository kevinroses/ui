/// <reference types="react" />
import { FormInstance } from 'antd';
import { StepWizardChildProps } from 'react-step-wizard';
import { MintDispatch, NFTFormValue, UploadedFilePin, FilePreview } from '../index';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    dispatch: MintDispatch;
    form: FormInstance;
    formValues: NFTFormValue[] | null;
    setNFTValues: (filePins: UploadedFilePin[]) => void;
    onClose: () => void;
    doEachRoyaltyInd: boolean;
    track: any;
}
export default function Summary({ previousStep, goToStep, files, filePreviews, nextStep, dispatch, formValues, onClose, setNFTValues, doEachRoyaltyInd, track, }: Props): JSX.Element | null;
export {};
