import { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    height?: number;
    width?: number;
}
export declare const Spinner: ({ width, height, ...restOfProps }: Props) => JSX.Element;
export {};
