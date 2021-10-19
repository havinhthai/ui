import * as React from 'react';
import { Network } from '@dcl/schemas';
import { HeaderProps } from '../Header/Header';
import './Mana.css';
export declare type ManaProps = {
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
    inline?: boolean;
    network?: Network;
    className?: string;
    children?: React.ReactChild;
};
export declare class Mana extends React.Component<ManaProps & HeaderProps> {
    static defaultProps: {
        className: string;
        network: Network;
    };
    render(): JSX.Element;
}
