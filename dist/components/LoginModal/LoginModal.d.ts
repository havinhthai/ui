import * as React from 'react';
import './LoginModal.css';
export declare enum LoginModalOptionType {
    METAMASK = "metamask",
    DAPPER = "dapper",
    FORTMATIC = "fortmatic",
    COINBASE = "coinbase",
    SAMSUNG = "samsung-blockchain-wallet",
    WALLET_CONNECT = "wallet-connect"
}
export declare type LoginModalProps = {
    className?: string;
    message?: React.ReactNode;
    hasError?: boolean;
    open?: boolean;
    loading?: boolean;
    i18n?: LoginModalI18N;
    onClose?: () => void;
};
export declare type LoginModalOptionProps = {
    type: LoginModalOptionType;
    i18n?: LoginModalOptionI18N;
    onClick?: () => void;
};
export declare type LoginModalI18N = {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    error: React.ReactNode;
};
export declare type LoginModalOptionI18N = {
    browser_extension: React.ReactNode;
    email: React.ReactNode;
    mobile: React.ReactNode;
};
declare class LoginModalOption extends React.PureComponent<LoginModalOptionProps> {
    static defaultProps: {
        i18n: {
            browser_extension: string;
            email: string;
            mobile: string;
        };
    };
    render(): JSX.Element;
}
export declare class LoginModal extends React.Component<LoginModalProps> {
    static defaultProps: {
        className: string;
        hasError: boolean;
        loading: boolean;
        i18n: {
            title: string;
            subtitle: string;
            message: string;
            error: string;
        };
    };
    static Option: typeof LoginModalOption;
    render(): JSX.Element;
}
export {};
