import * as React from 'react';
import { TileMapProps, Layer, Coord } from 'react-tile-map';
import 'react-tile-map/lib/styles.css';
import './Atlas.css';
export declare type AtlasTile = {
    x: number;
    y: number;
    type: number;
    left?: number;
    top?: number;
    topLeft?: number;
    owner: string;
    name?: string;
    estate_id?: string;
};
export { Layer, Coord };
export declare type AtlasProps = Omit<TileMapProps, 'layers'> & {
    layers?: Layer[];
    tiles?: Record<string, AtlasTile>;
};
export declare type AtlasState = {
    tiles?: Record<string, AtlasTile>;
};
export declare class Atlas extends React.PureComponent<AtlasProps, AtlasState> {
    static defaultProps: {
        layers: any[];
        x: number;
        y: number;
        className: string;
        initialX: number;
        initialY: number;
        size: number;
        width: number;
        height: number;
        zoom: number;
        minSize: number;
        maxSize: number;
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
        panX: number;
        panY: number;
        padding: number;
        isDraggable: boolean;
        renderMap: typeof import("react-tile-map").renderMap;
    };
    state: {
        tiles: Record<string, AtlasTile>;
    };
    mounted: boolean;
    layer: Layer;
    static TILES_URL: string;
    static fetchTiles: (url?: string) => Promise<Record<string, AtlasTile>>;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleUpdateTiles: (tiles: Record<string, AtlasTile>) => void;
    render(): JSX.Element;
}
