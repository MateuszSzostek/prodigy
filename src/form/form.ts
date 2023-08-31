import { NTDForms } from "../types/forms";

const dispatchCustomEvent = (name: string, value: any, extra?: any) => {
  let event = new CustomEvent(`${name}`, {
    detail: {
      value: value,
      extra: extra,
    },
  });

  window.dispatchEvent(event);
};

export default class Form implements NTDForms.IForm {
  _fields: NTDForms.InputFieldType[] = [];
  _validationSchema: NTDForms.ValidationSchema = { rules: [] };

  constructor(validationSchema?: NTDForms.ValidationSchema) {
    this._fields = [];
    //@ts-ignore
    this.register = this.register.bind(this);
    this.reset = this.reset.bind(this);
    this.setValue = this.setValue.bind(this);
    //@ts-ignore
    this.validate = this.validate.bind(this);
    this.validateField = this.validateField.bind(this);
    //@ts-ignore
    this.cleanValidationErrors = this.cleanValidationErrors.bind(this);
    //@ts-ignore
    this._validationSchema = validationSchema;
  }
  //@ts-ignore
  validate: (this: NTDForms.IForm) => void = function () {
    const fields: NTDForms.InputFieldType[] = this._fields;
    const validationSchema: NTDForms.ValidationSchema = this._validationSchema;

    const { rules } = validationSchema;

    fields.forEach((field) => {
      this.validateField(field, rules);
    });
  };

  validateField: (
    field: NTDForms.InputFieldType,
    rules: NTDForms.ValidationRule
  ) => void = function (field, rules) {
    field["errors"] = [];
    for (const [key, validateFuncs] of Object.entries<NTDForms.ValidationRule>(
      rules
    )) {
      if (field.id === key) {
        field.isValidated = true;
        field.isValid = null;
        for (const [keyFunc, validateFunc] of Object.entries<
          (
            value: any,
            key: string
          ) => {
            valid: boolean;
            errorMessage: string;
          }
        >(validateFuncs)) {
          const validationResult = validateFunc(field.value, key);
          if (field.isValid === true || field.isValid === null) {
            field.isValid = validationResult.valid;
          }

          if (validationResult.errorMessage !== null) {
            field.errors.push(validationResult.errorMessage);
          }
        }

        dispatchCustomEvent(
          `onvalidationerrorsvaluechangehandler-${field.id}`,
          0,
          {
            validationErrors: field.errors,
          }
        );
      }
    }
  };
  // @ts-ignore
  register = (id: string): NTDForms.RegisterReturnType | undefined => {
    console.log(this);
    const validateField = this.validateField;
    // @ts-ignore
    const validationSchema = this._validationSchema;

    // @ts-ignore
    const fields: NTDForms.InputFieldType[] = this._fields;
    const ref = { current: null };

    const onChange = function (e: React.FormEvent<HTMLInputElement>) {
      if (e?.currentTarget?.type === "checkbox") return;
      const indexOfField = fields.findIndex((el) => el.id === id);
      if (indexOfField === -1) return;
      fields[indexOfField].value = e?.currentTarget?.value;
    };

    const onBlur = function (e?: React.FormEvent<HTMLInputElement>) {
      const indexOfField = fields.findIndex((el) => el.id === id);
      const { rules } = validationSchema;

      validateField(fields[indexOfField], rules);

      if (e?.currentTarget?.type === "checkbox") return;

      if (indexOfField === -1) return;
      // fields[indexOfField].value = e?.currentTarget?.value;
    };

    // @ts-ignore
    if (this._fields.some((el) => el.id === id)) {
      console.warn(
        `WARNING: duplicated input field has been found. Field with id:${id} already exists in input fields array. Another field with this id will not be added to form.`
      );
      return;
    }
    // @ts-ignore
    this._fields.push({
      id: id,
      name: id,
      value: "",
      //@ts-ignore
      ref: ref,
      errors: [],
      isValid: null,
      isTouched: null,
      isValidated: null,
      isDirty: null,
    });

    return { onChange, onBlur, name: id, ref };
  };

  setValue = function (id: string, value: string | number | boolean) {
    // @ts-ignore
    const ele = this._fields.filter((el) => el.id === id);

    if (ele?.length === 0) {
      console.warn(
        `WARNING: Can not set value of not existing element, id: ${id}.`
      );
      return;
    }

    if (ele[0] === "undefined") {
      console.warn(
        `WARNING: Can not set value of not existing element, id: ${id}.`
      );
      return;
    }

    if (ele[0].ref.current.tagName === "SELECT") {
      dispatchCustomEvent(`oninputvaluechange-${ele[0].id}`, value, {
        setNoOption: false,
      });
    } else {
      dispatchCustomEvent(`oninputvaluechange-${ele[0].id}`, value);
      ele[0].ref.current.value = value;
      ele[0].value = value;
    }
  };
  // @ts-ignore
  cleanValidationErrors = function () {
    // @ts-ignore
    this._fields = this._fields.map((field) => {
      field.errors = [];
      dispatchCustomEvent(
        `onvalidationerrorsvaluechangehandler-${field.id}`,
        0,
        {
          validationErrors: [],
        }
      );
      return field;
    });
  };

  reset = function () {
    // @ts-ignore

    this._fields.forEach((el) => {
      if (el.ref.current.tagName === "SELECT") {
        dispatchCustomEvent(`oninputvaluechange-${el.id}`, null, {
          setNoOption: true,
        });

        el.value = null;
        return;
      }
      if (el.ref.current.type === "checkbox") {
        el.ref.current.value = false;
        dispatchCustomEvent(`oninputvaluechange-${el.id}`, false);
        el.value = false;
        return;
      }
      el.ref.current.value = "";
      el.value = "";
    });
  };

  setFields = function () {};
}
