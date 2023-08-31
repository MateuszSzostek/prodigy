import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDBox {
  export interface IBox extends NTDUI.IUIElement, PropsWithChildren {
    size?: BoxSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLElement>;
  }

  export type BoxAppearance = "solid" | "soft" | "simple";

  export interface IBoxAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type BoxSizeType = "xs" | "sm" | "md" | "lg";

  export interface IBoxBorderColor {
    borderColorClass: string;
  }

  export interface IBoxSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface IBoxHook extends IBox {}
}
