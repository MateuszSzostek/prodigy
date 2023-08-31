import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDBadge {
  export interface IBadge extends NTDUI.IUIElement, PropsWithChildren {
    size?: BadgeSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLDivElement>;
    label?: string;
    onDeleteHandler?: () => void;
  }

  export type BadgeAppearance = "solid" | "soft" | "simple";

  export interface IBadgeAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type BadgeSizeType = "xs" | "sm" | "md" | "lg";

  export interface IBadgeBorderColor {
    borderColorClass: string;
  }

  export interface IBadgeSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface IBadgeHook extends IBadge {}
}
