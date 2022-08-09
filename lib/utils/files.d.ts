import { FilePreview } from '../modules/bulk-minter';
export declare const isImage: (file: File | FilePreview) => boolean;
export declare const isVideo: (file: File | FilePreview) => boolean;
export declare const isAudio: (file: File | FilePreview) => boolean;
export declare const is3DFilePreview: (filePreview: FilePreview) => boolean;
export declare const is3DFile: (file: File) => boolean;
export declare const isPdf: (file: File | FilePreview) => boolean;
export declare const detectCategoryByFileExt: (fileName: string) => "image" | "video" | "audio" | "vr" | "pdf" | "html";
export declare function getFinalFileWithUpdatedName(file: File, numberOfDuplicates: number): File;
