/// <reference types="react" />
import './TextFilter.css';
export declare type TextFilterProps = {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (newValue: string) => void;
};
export declare const TextFilter: (props: TextFilterProps) => JSX.Element;
