import * as React from 'react';
import './Blockie.css';
export declare type BlockieProps = {
    seed: string;
    color?: string;
    spotcolor?: string;
    bgcolor?: string;
    size?: number;
    scale?: number;
    className?: string;
    children?: React.ReactNode;
};
export declare type CanvasStateStore = {
    canvas?: HTMLCanvasElement;
};
export declare class Blockie extends React.PureComponent<BlockieProps> {
    static defaultProps: {
        color: string;
        bgcolor: string;
        spotcolor: string;
        size: number;
        scale: number;
        className: string;
    };
    canvas: React.RefObject<HTMLCanvasElement>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    getOpts(): Pick<BlockieProps, "seed" | "color" | "spotcolor" | "bgcolor" | "size" | "scale">;
    draw(): string | undefined;
    render(): JSX.Element;
}
