import React, { FC } from 'react';
declare type AsyncFunction = (arg?: any) => Promise<void>;
export declare type Action = {
    name: string;
    id: string;
    action: AsyncFunction;
    param: any;
};
interface ActionSettings {
    onComplete?: () => void;
    onActionSuccess?: (txName: string) => void;
    onActionFailure?: (err: any) => void;
}
interface MultiTransactionState {
    hasActionPending: boolean;
    hasRemainingActions: boolean;
    actions: Action[];
    runActions: (actions: Action[], settings?: ActionSettings) => Promise<void>;
    retryActions: (settings?: ActionSettings) => Promise<void>;
    clearActions: () => void;
    onFinished?: () => void;
    onStart?: () => void;
}
export declare const MultiTransactionContext: React.Context<MultiTransactionState>;
export declare const MultiTransactionProvider: FC;
export declare const useMultiTransactionModal: () => MultiTransactionState;
export {};
