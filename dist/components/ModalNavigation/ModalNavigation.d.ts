import * as React from 'react';
import './ModalNavigation.css';
export declare type ModalNavigationProps = {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    onBack?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export declare class ModalNavigation extends React.PureComponent<ModalNavigationProps> {
    render(): JSX.Element;
}
