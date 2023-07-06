import { NTDForms } from "../types/forms";
export default class Form {
    _fields: NTDForms.InputFieldType[];
    constructor();
    register: (id: string) => {
        onChange: (e: React.FormEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
        name: string;
        ref: {
            current: null;
        };
    } | undefined;
    setValue: (id: string, value: string) => void;
    reset: () => void;
    setFields: () => void;
}
