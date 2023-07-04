import { NTDUI } from "./ui";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
export namespace NTDButton {
  export interface IButton extends NTDUI.IUIElement, PropsWithChildren {
    size?: ButtonSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLButtonElement>;
  }

  export type ButtonAppearance = "solid" | "soft" | "simple";

  export interface IButtonAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type ButtonSizeType = "xs" | "sm" | "md" | "lg";

  export interface IButtonBorderColor {
    borderColorClass: string;
  }

  export interface IButtonSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface IButtonHook extends IButton {}
}
