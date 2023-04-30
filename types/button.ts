import { NTDUI } from "./ui";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
export namespace NTDButton {
  export interface IButton extends NTDUI.IUIElement, PropsWithChildren {
    small?: boolean;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;
  }

  export type ButtonAppearance = "solid" | "soft" | "simple";

  export interface IButtonAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface IButtonBorderColor {
    borderColorClass: string;
  }

  export interface IButtonSize {
    sizeClass: string;
  }

  export interface IButtonHook extends IButton {}
}
