import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDTabs {
  export interface ITabs extends NTDUI.IUIElement, PropsWithChildren {
    size?: TabsSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLElement>;
    animation?: TabAnimationType;
    items?: JSX.Element[];
    tab?: (
      currentIdx: number,
      slideIdx: number,
      totalAmount: number,
      Tab: JSX.Element
    ) => JSX.Element;
  }

  export type TabAnimationType = "transition" | "fade" | "none";

  export type TabsAppearance = "solid" | "soft" | "simple";

  export interface ITabsAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type TabsSizeType = "xs" | "sm" | "md" | "lg";

  export interface ITabsBorderColor {
    borderColorClass: string;
  }

  export interface ITabsSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface ITabsHook extends ITabs {}
}
