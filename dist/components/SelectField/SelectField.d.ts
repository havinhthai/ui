import * as React from 'react';
import { DropdownProps } from '../Dropdown/Dropdown';
import './SelectField.css';
export declare type SelectFieldProps = DropdownProps & {
    label?: string;
    error?: boolean;
    message?: string;
    header?: JSX.Element;
};
export declare class SelectField extends React.PureComponent<SelectFieldProps> {
    render(): JSX.Element;
}
