import * as React from 'react';
import './Back.css';
export declare type BackProps = {
    className?: string;
    absolute?: boolean;
    onClick?: () => void;
};
export declare class Back extends React.PureComponent<BackProps> {
    render(): JSX.Element;
}
