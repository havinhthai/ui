import { Network } from '@dcl/schemas';
import * as React from 'react';
import { Avatar } from '../../types/avatar';
import './UserMenu.css';
export declare type UserMenuI18N = {
    signIn: React.ReactNode;
    signOut: React.ReactNode;
    guest: React.ReactNode;
    settings: React.ReactNode;
    account: React.ReactNode;
};
export declare type UserMenuProps = {
    isSignedIn: boolean;
    isSigningIn: boolean;
    isActivity: boolean;
    hasActivity: boolean;
    address?: string;
    manaBalances?: Partial<Record<Network, number>>;
    avatar?: Avatar;
    menuItems?: React.ReactNode;
    i18n: UserMenuI18N;
    onSignOut: () => void;
    onSignIn: () => void;
    onClickProfile: () => void;
    onClickActivity: () => void;
    onClickSettings: () => void;
    onClickBalance: (network: Network) => void;
};
export declare type UserMenuState = {
    isOpen: boolean;
    isClickable: boolean;
};
export declare class UserMenu extends React.Component<UserMenuProps, UserMenuState> {
    static defaultProps: Partial<UserMenuProps>;
    state: UserMenuState;
    mounted: boolean;
    ref: HTMLElement | null;
    handleClose: () => void;
    handleToggle: () => void;
    toggle(value: boolean): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
