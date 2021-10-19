import * as React from 'react';
import './SignIn.css';
export declare type SignInI18N = {
    header: React.ReactNode;
    message: React.ReactNode;
    connect: React.ReactNode;
    connecting: React.ReactNode;
    connected: React.ReactNode;
    error: React.ReactNode;
};
export declare type SignInProps = {
    center?: boolean;
    isConnected?: boolean;
    isConnecting?: boolean;
    hasError?: boolean;
    onConnect?: () => void;
    i18n?: SignInI18N;
};
export declare class SignIn extends React.PureComponent<SignInProps> {
    static defaultProps: Partial<SignInProps>;
    render(): JSX.Element;
}
