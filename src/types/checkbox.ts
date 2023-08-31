import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDCheckbox {
  export interface ICheckbox extends NTDUI.IUIElement, PropsWithChildren {
    size?: CheckboxSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLInputElement>;
    label?: string;
    errorLabel?: string;
    id?: string;
    name?: string;
    register?: any;
    checked?: boolean;
  }

  export type CheckboxAppearance = "solid" | "soft" | "simple";

  export interface ICheckboxAppearanceData {
    bgColorClass: string;
    bgCheckedColorClass: string;
    checkmarkColorClass: string;
  }

  export type CheckboxSizeType = "xs" | "sm" | "md" | "lg";

  export interface ICheckboxBorderColor {
    borderColorClass: string;
  }

  export interface ICheckboxSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface ICheckboxHook extends ICheckbox {}
}
