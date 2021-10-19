import * as React from 'react';
import { DropdownProps } from '../Dropdown/Dropdown';
import './TagField.css';
export declare type TagFieldProps = DropdownProps & {
    label?: string;
    error?: boolean;
    message?: string;
    value?: (string | number | boolean)[];
};
export declare class TagField extends React.PureComponent<TagFieldProps> {
    containerRef: React.RefObject<HTMLDivElement>;
    getOptions: () => {
        text: string;
        value: string;
    }[];
    handleScrollToEnd: () => void;
    handleChange: (e: React.SyntheticEvent<HTMLElement, Event>, dropdownProps: DropdownProps) => void;
    render(): JSX.Element;
}
