/// <reference types="react" />
import { FilePreview, NFTValue } from '../modules/bulk-minter/index';
export declare const StyledPrevWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
interface Props {
    filePreviews: Array<FilePreview>;
    index?: number;
    width?: number;
    children?: any;
    nftValues?: NFTValue[];
}
export declare const NFTPreviewGrid: ({ filePreviews, index, width, children, nftValues, }: Props) => JSX.Element;
export {};
