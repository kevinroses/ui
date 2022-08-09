/// <reference types="react" />
import { StepWizardChildProps } from 'react-step-wizard';
import { Connection } from '@solana/web3.js';
import { FilePreview, NFTValue, UploadedFilePin } from '../index';
import { Wallet } from '@metaplex/js/lib/wallet';
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    wallet: Wallet;
    nftValues: NFTValue[];
    index: number;
    isLast: boolean;
    updateNFTValue: (value: NFTValue, index: number) => void;
    uploadMetaData: (value: NFTValue) => Promise<UploadedFilePin>;
    onClose: () => void;
    connection: Connection;
    track: any;
    holaSignMetadata: any;
    savedEndpoint?: string;
}
export default function MintInProgress({ previousStep, goToStep, files, filePreviews, nextStep, isActive, nftValues, wallet, updateNFTValue, connection, uploadMetaData, onClose, index, isLast, track, holaSignMetadata, savedEndpoint, }: Props): JSX.Element | null;
export {};
