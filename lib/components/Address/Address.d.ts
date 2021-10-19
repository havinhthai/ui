import * as React from 'react';
import './Address.css';
export declare type AddressProps = {
    value: string;
    strong?: boolean;
    shorten?: boolean;
    tooltip?: boolean;
    className?: string;
};
export declare class Address extends React.Component<AddressProps> {
    static defaultProps: {
        className: string;
        strong: boolean;
        shorten: boolean;
    };
    render(): JSX.Element;
}
