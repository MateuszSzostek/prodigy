export namespace NTDForms {
  export type InputFieldType = {
    id: string;
    name: string;
    value: string;
    errors: string[];
    isValid: boolean | null;
    isTouched: boolean | null;
    isValidated: boolean | null;
    isDirty: boolean | null;
  };
}
