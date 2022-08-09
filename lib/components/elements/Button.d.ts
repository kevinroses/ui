import React from 'react';
import 'react-loader-spinner /dist/loader/css/react-spinner-loader.css';
interface ButtonProps {
    children?: any;
    htmlType?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    secondary?: boolean;
    block?: boolean;
    size?: string;
    skeleton?: boolean;
    fixedWidth?: boolean;
    onClick?: () => any;
}
declare const Button: ({ children, htmlType, disabled, loading, className, secondary, block, size, skeleton, fixedWidth, onClick, }: ButtonProps) => JSX.Element;
export default Button;
export declare const ButtonV3: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const SecondaryButtonV3: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const AnchorButton: import("styled-components").StyledComponent<"a", any, {}, never>;
export declare const SelectWalletButton: import("styled-components").StyledComponent<React.FC<import("@solana/wallet-adapter-react-ui/lib/types/Button").ButtonProps>, any, {
    children: "Connect";
}, "children">;
export declare const ConnectWalletButton: import("styled-components").StyledComponent<React.FC<import("@solana/wallet-adapter-react-ui/lib/types/Button").ButtonProps>, any, {
    children: "Connect";
}, "children">;
export declare const DisconnectWalletButton: import("styled-components").StyledComponent<React.FC<import("@solana/wallet-adapter-react-ui/lib/types/Button").ButtonProps>, any, {
    children: "Disconnect";
    endIcon: any;
    startIcon: any;
}, "children" | "endIcon" | "startIcon">;
