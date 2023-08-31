import { NTDForms } from "../types/forms";

class ValidatorClass implements NTDForms.IValidator {
  builder(): NTDForms.ValidatorBuilder {
    const validators: ((
      value?: string | number | boolean,
      key?: string
    ) => void)[] = [];
    return {
      notNull(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (
          value: string | number | boolean,
          key: string
        ) {
          if (value !== null) return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' can not be null`,
            };
        });

        return this;
      },

      notEmpty(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (value?.length > 0) return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' can not be empty`,
            };
        });

        return this;
      },

      isNumber(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (/^\d+(\.\d+)?$/.test(value) === true)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be a number`,
            };
        });

        return this;
      },

      isEmail(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ===
            true
          )
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be a valid email address`,
            };
        });

        return this;
      },

      isPhoneNumber(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (/^\d{10}$/.test(value) === true)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be a valid phone number`,
            };
        });

        return this;
      },

      minLength(
        this: NTDForms.ValidatorBuilder,
        length: number,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (value?.length >= length)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be at least ${length} characters long`,
            };
        });

        return this;
      },

      maxLength(
        this: NTDForms.ValidatorBuilder,
        length: number,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (value?.length <= length)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be maximum ${length} characters long`,
            };
        });

        return this;
      },

      max(
        this: NTDForms.ValidatorBuilder,
        maxValue: number,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string | number, key: string) {
          if (parseFloat(value as string) <= maxValue)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be less or equal than ${maxValue}`,
            };
        });

        return this;
      },

      min(
        this: NTDForms.ValidatorBuilder,
        minValue: number,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string | number, key: string) {
          if (parseFloat(value as string) >= minValue)
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must be at least ${minValue}`,
            };
        });

        return this;
      },

      contain(
        this: NTDForms.ValidatorBuilder,
        containValue: string,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (value.toString().includes(containValue))
            return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Value of '${key}' must contain ${containValue}`,
            };
        });

        return this;
      },

      selectSelected(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: string, key: string) {
          if (value !== null) return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Select of '${key}' must be selected.`,
            };
        });

        return this;
      },

      checkboxChecked(
        this: NTDForms.ValidatorBuilder,
        customValidationMessage?: string
      ) {
        //@ts-ignore
        validators.push(function (value: boolean, key: string) {
          if (value === true) return { valid: true, errorMessage: null };
          else
            return {
              valid: false,
              errorMessage: customValidationMessage
                ? customValidationMessage
                : `Checkbox '${key}' must be checked.`,
            };
        });

        return this;
      },

      build: function (): ((
        value?: string | number | boolean,
        key?: string
      ) => void)[] {
        console.log(validators);
        return validators;
      },
    };
  }
}

const Validator = new ValidatorClass();

export default Validator;
