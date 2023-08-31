import { NTDForms } from "../types/forms";

export default class ValidationSchema implements NTDForms.ValidationSchema {
  rules: any = {};

  constructor(rules: any) {
    this.rules = rules;
  }
}
