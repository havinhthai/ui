import * as React from 'react';
import { InputProps } from 'semantic-ui-react/dist/commonjs/elements/Input/Input';
import './Field.css';
export declare type FieldProps = InputProps & {
    label?: string;
    error?: boolean;
    message?: string;
    action?: string;
    onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare class Field extends React.PureComponent<FieldProps> {
    hasAction(): boolean;
    isAddress(): boolean;
    render(): JSX.Element;
}
