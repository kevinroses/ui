import { FormInstance } from 'antd';
import React from 'react';
import { StepWizardChildProps } from 'react-step-wizard';
import { MintDispatch, NFTFormValue, FilePreview } from '../index';
export declare const StyledCreatorsRow: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledClearButton: import("styled-components").StyledComponent<(props: any) => JSX.Element, any, {}, never>;
export declare const HOLAPLEX_CREATOR_OBJECT: Readonly<{
    address: string;
    share: number;
}>;
interface Props extends Partial<StepWizardChildProps> {
    files: Array<File>;
    filePreviews: Array<FilePreview>;
    form: FormInstance;
    userKey?: string;
    dispatch: MintDispatch;
    formValues: NFTFormValue[] | null;
    isFirst?: boolean;
    index: number;
    setDoEachRoyaltyInd: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void;
    doEachRoyaltyInd?: boolean;
    track: any;
    enforcedRoyalties: boolean;
}
export default function RoyaltiesCreators({ previousStep, goToStep, files, dispatch, nextStep, form, userKey, formValues, filePreviews, setDoEachRoyaltyInd, onClose, index, isFirst, track, enforcedRoyalties, }: Props): JSX.Element | null;
export {};
