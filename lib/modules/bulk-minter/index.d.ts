/// <reference types="react" />
import { Connection } from '@solana/web3.js';
export declare const STORAGE_UPLOAD_ENDPOINT: string;
export declare const MAX_CREATOR_LIMIT = 4;
export interface Creator {
    address: string;
    share: number;
    charityProps?: CharityProps;
}
export interface CharityProps {
    isCharity: boolean;
    displayName: string;
    imageUrl?: string;
}
interface NFTFile {
    uri: string;
    type: string;
}
export interface UploadedFilePin extends NFTFile {
    name: string;
}
export declare type FormValues = {
    [key: string]: NFTFormValue;
};
declare type NFTCategory = 'image' | 'video' | 'audio' | 'vr' | 'pdf' | 'html';
export interface NFTFormValue {
    name: string;
    imageName: string;
    coverImageFile?: File;
    description: string;
    attributes: Array<NFTAttribute>;
    seller_fee_basis_points: number;
    externalUrl: string;
    properties: {
        creators: Array<Creator>;
        maxSupply?: number;
    };
}
export declare type FileOrString = NFTFile | string;
export declare type NFTAttribute = {
    trait_type: string;
    value: string | number;
};
export declare enum MintStatus {
    FAILED = 0,
    SUCCESS = 1
}
export interface FilePreview {
    type: string;
    coverImage: File | null;
    file: File;
}
export interface NFTValue {
    name: string;
    description: string;
    attributes?: NFTAttribute[];
    symbol: string;
    image: string;
    seller_fee_basis_points: number;
    mintStatus?: MintStatus;
    animation_url?: string;
    external_url?: string;
    properties: {
        files: FileOrString[];
        maxSupply?: number;
        creators?: Creator[];
        category: NFTCategory;
    };
}
export declare type MintDispatch = (action: MintAction) => void;
export interface MintAction {
    type: 'SET_FILES' | 'DELETE_FILE' | 'ADD_FILE' | 'UPLOAD_FILES' | 'INSERT_COVER_IMAGE' | 'SET_FILE_PREVIEWS' | 'SET_FORM_VALUES' | 'SET_NFT_VALUES' | 'RESET_FORM';
    payload: File[] | File | FilePreview[] | FilePreview | String | Array<UploadedFilePin> | NFTFormValue[] | NFTValue[] | {
        coverImage: File;
        index: number;
    } | {
        file: File;
        index: number;
    };
}
interface Props {
    storefront: any;
    wallet: any;
    track: any;
    holaSignMetadata: any;
    onClose: () => void;
    connection: Connection;
    savedEndpoint?: string;
    goToOwnedRoute?: () => void;
    enforcedRoyalties?: boolean;
}
declare function BulkMinter({ storefront, track, holaSignMetadata, onClose, wallet, connection, savedEndpoint, goToOwnedRoute, enforcedRoyalties, }: Props): JSX.Element | null;
export default BulkMinter;
