/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
import { Connection } from '@solana/web3.js';
import { FilePreview } from '..';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    onClose: () => void;
    track: any;
    pubKey: string;
    connection: Connection;
}
export default function PriceSummary({ previousStep, goToStep, filePreviews, files, nextStep, pubKey, track, onClose, connection, }: Props): JSX.Element;
export {};
