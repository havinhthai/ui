import { TextAreaProps } from 'semantic-ui-react/dist/commonjs/addons/TextArea/TextArea';
import './TextAreaField.css';
export declare type TextAreaFieldProps = TextAreaProps & {
    label?: string;
};
export declare const TextAreaField: (props: TextAreaFieldProps) => JSX.Element;
