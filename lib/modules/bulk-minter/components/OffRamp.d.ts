/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
import { FilePreview, MintDispatch, NFTValue } from '../index';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    onClose: () => void;
    nftValues: NFTValue[];
    storefront?: any;
    goToOwnedRoute?: () => void;
    dispatch: MintDispatch;
}
export default function OffRampScreen({ goToStep, dispatch, onClose, files, filePreviews, nftValues, storefront, goToOwnedRoute, }: Props): JSX.Element;
export {};
