import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDTextInput {
  export interface ITextInput extends NTDUI.IUIElement, PropsWithChildren {
    valid?: boolean;
    isDirty?: boolean;
    errorMessage?: string;
    label?: string;
    id?: string;
    name?: string;
    error?: string;
    base?: React.HTMLProps<HTMLInputElement>;
    appearance?: TextInputAppearance;
    size?: TextInputSizeType;
  }

  export type TextInputAppearance = "solid" | "soft" | "simple";

  export type TextInputSizeType = "xs" | "sm" | "md" | "lg";

  export interface ITextInputAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface ITextInputBorderColor {
    borderColorClass: string;
  }

  export interface ITextInputSize {
    sizeClass: string;
    labelSizeClass: string;
    fieldTextSizeClass: string;
    errorLabelSizeClass: string;
  }

  export interface ITextInputHook extends ITextInput {}
}
