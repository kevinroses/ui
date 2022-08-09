import React from 'react';
export declare const StyledModal: import("styled-components").StyledComponent<React.FC<import("antd").ModalProps> & import("antd/lib/modal/confirm").ModalStaticFunctions & {
    useModal: typeof import("antd/lib/modal/useModal").default;
    destroyAll: () => void;
    config: typeof import("antd/lib/modal/confirm").modalGlobalConfig;
}, any, {}, never>;
export declare const PreviewWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
interface Props {
    files: Array<File>;
    index?: number;
    width?: number;
    removeFile: (id: string) => void;
    children?: any;
}
declare const VerifyFileUpload: ({ files, index, width, removeFile, children }: Props) => JSX.Element;
export default VerifyFileUpload;
