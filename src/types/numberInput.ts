import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDNumberInput {
  export interface INumberInput extends NTDUI.IUIElement, PropsWithChildren {
    valid?: boolean;
    isDirty?: boolean;
    errorMessage?: string;
    label?: string;
    id?: string;
    name?: string;
    error?: string[];
    base?: React.HTMLProps<HTMLInputElement>;
    appearance?: NumberInputAppearance;
    size?: NumberInputSizeType;
    register?: any;
    value?: string;
  }

  export type NumberInputAppearance = "solid" | "soft" | "simple";

  export type NumberInputSizeType = "xs" | "sm" | "md" | "lg";

  export interface INumberInputAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface INumberInputBorderColor {
    borderColorClass: string;
  }

  export interface INumberInputSize {
    sizeClass: string;
    labelSizeClass: string;
    fieldNumberSizeClass: string;
    errorLabelSizeClass: string;
  }

  export interface INumberInputHook extends INumberInput {}
}
