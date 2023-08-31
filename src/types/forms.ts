export namespace NTDForms {
  export type InputFieldType = {
    id: string;
    name: string;
    value: string | boolean | number;
    errors: string[];
    isValid: boolean | null;
    isTouched: boolean | null;
    isValidated: boolean | null;
    isDirty: boolean | null;
  };

  export interface IForm {
    cleanValidationErrors: () => void;
    register: (id: string) => RegisterReturnType;
    reset: () => void;
    setFields: () => void;
    setValue: (id: string, value: string | number | boolean) => void;
    validate: (this: {
      validateField: (
        field: NTDForms.InputFieldType,
        rules: NTDForms.ValidationRule
      ) => void;
    }) => void;
    validateField: (
      field: NTDForms.InputFieldType,
      rules: NTDForms.ValidationRule
    ) => void;
    _fields: NTDForms.InputFieldType[];
    _validationSchema: NTDForms.ValidationSchema;
  }

  export type RegisterReturnType = {
    onChange: any;
    onBlur: any;
    name: string;
    ref: any;
  };

  export type ValidationSchema = {
    rules: ValidationRule;
  };

  export type ValidationRule = {};

  export type IValidator = {
    builder: () => ValidatorBuilder;
  };

  export type ValidatorBuilder = {
    build: () => void;
    checkboxChecked: (customValidationMessage?: string) => ValidatorBuilder;
    contain: (
      containValue: string,
      customValidationMessage?: string
    ) => ValidatorBuilder;
    isEmail: (customValidationMessage?: string) => ValidatorBuilder;
    isNumber: (customValidationMessage?: string) => ValidatorBuilder;
    isPhoneNumber: (customValidationMessage?: string) => ValidatorBuilder;
    max: (
      maxValue: number,
      customValidationMessage?: string
    ) => ValidatorBuilder;
    maxLength: (
      length: number,
      customValidationMessage?: string
    ) => ValidatorBuilder;
    min: (
      minValue: number,
      customValidationMessage?: string
    ) => ValidatorBuilder;
    minLength: (
      length: number,
      customValidationMessage?: string
    ) => ValidatorBuilder;
    notEmpty: (customValidationMessage?: string) => ValidatorBuilder;
    notNull: (customValidationMessage?: string) => ValidatorBuilder;
    selectSelected: (customValidationMessage?: string) => ValidatorBuilder;
  };
}
