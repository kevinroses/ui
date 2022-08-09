import React from 'react';
import { StepWizardChildProps } from 'react-step-wizard';
import { MintDispatch } from '..';
interface Props extends Partial<StepWizardChildProps> {
    children?: React.ReactElement | React.ReactElement[] | boolean;
    title?: string;
    altClearText?: string;
    showNavigation?: boolean;
    onClose: () => void;
    dispatch?: MintDispatch;
}
export default function NavContainer({ previousStep, children, title, onClose, goToStep, altClearText, showNavigation, dispatch, }: Props): JSX.Element;
export {};
