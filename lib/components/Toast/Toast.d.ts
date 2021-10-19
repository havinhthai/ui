import * as React from 'react';
import './Toast.css';
export declare enum ToastType {
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
export declare type ToastProps = {
    type?: ToastType;
    title: string | JSX.Element;
    body: string | JSX.Element;
    closable?: boolean;
    timeout?: number;
    onClose?: () => void;
};
export declare class Toast extends React.PureComponent<ToastProps> {
    mounted: boolean;
    closeTimeoutId: number | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClose: () => void;
    closeAfterTimeout(): void;
    shouldCloseAfterTimeout(): boolean;
    render(): JSX.Element;
}
