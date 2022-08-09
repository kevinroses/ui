/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
import { MintDispatch } from '../index';
export declare const MAX_FILES = 10;
export declare const MAX_FILE_SIZE = 100000000;
export declare const NFT_MIME_TYPE_UPLOAD_VALIDATION_STRING = "image/jpeg,image/png,image/gif,video/mp4,video/mov,audio/mp3,audio/wave,audio/flac,.glb,.pdf";
interface Props extends Partial<StepWizardChildProps> {
    dispatch: MintDispatch;
    files: Array<File>;
    onClose: () => void;
}
export default function UploadStep({ nextStep, dispatch, onClose }: Props): JSX.Element;
export {};
