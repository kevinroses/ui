import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
declare type ModalProps = {
    open: Boolean;
    setOpen: Dispatch<SetStateAction<boolean>> | Dispatch<SetStateAction<Boolean>> | ((open: Boolean) => void);
    children: ReactNode;
    title?: String;
    priority?: boolean;
    short?: Boolean;
};
export declare const Modal: FC<ModalProps>;
export default Modal;
