import * as React from 'react';
import './Navbar.css';
export declare type NavbarI18N = {
    menu: {
        marketplace: React.ReactNode;
        docs: React.ReactNode;
        events: React.ReactNode;
        agora: React.ReactNode;
        dao: React.ReactNode;
        blog: React.ReactNode;
        builder: React.ReactNode;
    };
    account: {
        signIn: React.ReactNode;
        connecting: React.ReactNode;
    };
};
export declare type NavbarProps = {
    mana?: number;
    address?: string;
    activePage?: 'marketplace' | 'docs' | 'events' | 'agora' | 'dao' | 'blog' | 'builder' | string;
    leftMenu?: React.ReactNode;
    middleMenu?: React.ReactNode;
    rightMenu?: React.ReactNode;
    i18n?: NavbarI18N;
    isConnected?: boolean;
    isConnecting?: boolean;
    isSignIn?: boolean;
    isFullscreen?: boolean;
    isOverlay?: boolean;
    className?: string;
    onSignIn?: () => void;
    onClickAccount?: () => void;
};
export declare type NavbarState = {
    toggle: boolean;
};
export declare class Navbar extends React.PureComponent<NavbarProps, NavbarState> {
    static defaultProps: Partial<NavbarProps>;
    state: {
        toggle: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleToggle: (event: React.MouseEvent) => void;
    handleDocumentClick: () => void;
    renderLeftMenu(): React.ReactNode;
    renderRightMenu(): React.ReactNode;
    render(): JSX.Element;
}
