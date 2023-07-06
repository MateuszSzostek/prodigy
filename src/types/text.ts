import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDText {
  export interface IText extends NTDUI.IUIElement, PropsWithChildren {
    as?: JSX.IntrinsicElements;
    weight?: TextWeightType;
    italic?: boolean;
    color?: NTDUI.MetaColorType;
  }

  export type TextWeightType =
    | "thin"
    | "normal"
    | "medium"
    | "semi-bold"
    | "bold";

  export interface ITextBorderColor {
    borderColorClass: string;
  }

  export interface ITextColor {
    colorClass: string;
  }

  export interface ITextHook extends IText {}
}
