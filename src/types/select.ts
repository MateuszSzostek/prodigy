import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDSelect {
  export interface ISelect extends NTDUI.IUIElement, PropsWithChildren {
    size?: SelectSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLSelectElement>;
    label?: string;
    errorLabel?: string;
    options?: {
      id: string;
      Selectable?: JSX.Element;
    }[];
    id?: string;
    name?: string;
    register?: any;
  }

  export type SelectAppearance = "solid" | "soft" | "simple";

  export interface ISelectAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type SelectSizeType = "xs" | "sm" | "md" | "lg";

  export interface ISelectBorderColor {
    borderColorClass: string;
  }

  export interface ISelectChevronColor {
    chevronColorClass: string;
  }

  export interface ISelectSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface ISelectHook extends ISelect {}
}
