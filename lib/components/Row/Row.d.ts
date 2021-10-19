import * as React from 'react';
import './Row.css';
export declare type RowProps = {
    center?: boolean;
    align?: 'left' | 'center' | 'right';
    width?: number;
    height?: number;
    stacked?: boolean;
    grow?: boolean;
    shrink?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export declare class Row extends React.PureComponent<RowProps> {
    static defaultProps: Partial<RowProps>;
    render(): JSX.Element;
}
