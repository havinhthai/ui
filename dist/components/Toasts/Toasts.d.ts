import * as React from 'react';
import './Toasts.css';
export declare type ToastPosition = 'bottom left' | 'bottom right' | 'top left' | 'top right';
export declare type ToastsProps = {
    position?: ToastPosition;
    children: React.ReactNode;
};
export declare class Toasts extends React.PureComponent<ToastsProps> {
    render(): JSX.Element;
}
