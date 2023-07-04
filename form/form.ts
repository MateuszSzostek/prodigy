import { NTDForms } from "../types/forms";

export default class Form {
  _fields: NTDForms.InputFieldType[] = [];

  constructor() {
    this._fields = [];
    this.register = this.register.bind(this);
    this.reset = this.reset.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  register = function (id: string) {
    const fields = this._fields;
    const ref = { current: null };

    const onChange = function (e: React.FormEvent<HTMLInputElement>) {
      console.log(`${id} changed!`);
      console.log(fields);
      console.log(ref);
      const indexOfField = fields.findIndex((el) => el.id === id);
      if (indexOfField === -1) return;

      fields[indexOfField].value = e?.currentTarget?.value;
    };

    const onBlur = function (e: React.FormEvent<HTMLInputElement>) {
      console.log(`${id} changed!`);
      const indexOfField = fields.findIndex((el) => el.id === id);
      if (indexOfField === -1) return;

      fields[indexOfField].value = e?.currentTarget?.value;
    };

    console.log(this._fields);

    if (this._fields.some((el) => el.id === id)) {
      console.warn(
        `WARNING: duplicated input field has been found. Field with id:${id} already exists in input fields array. Another field with this id will not be added to form.`
      );
      return;
    }

    this._fields.push({
      id: id,
      name: id,
      value: "",
      ref: ref,
      errors: [],
      isValid: null,
      isTouched: null,
      isValidated: null,
      isDirty: null,
    });

    return { onChange, onBlur, name: id, ref };
  };

  setValue = function (id: string, value: string) {
    const ele = this._fields.filter((el) => el.id === id);

    if (ele === "undefined") {
      console.warn(
        `WARNING: Can not set value of not existing element, id: ${id}.`
      );
      return;
    }

    ele.ref.current.value = value;
  };

  reset = function () {
    this._fields = this._fields.map((el) => {
      el.ref.current.value = "";
      return {
        ...el,
        value: "",
      };
    });
  };

  setFields = function () {};
}
