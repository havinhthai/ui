import * as React from 'react';
import './Column.css';
export declare type ColumnProps = {
    align: 'left' | 'center' | 'right';
    center?: boolean;
    grow?: boolean;
    shrink?: boolean;
    width?: number;
    height?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export declare class Column extends React.PureComponent<ColumnProps> {
    static defaultProps: Partial<ColumnProps>;
    render(): JSX.Element;
}
