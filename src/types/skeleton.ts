import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDSkeleton {
  export interface ISkeleton extends NTDUI.IUIElement, PropsWithChildren {
    size?: SkeletonSizeType;
    bold?: boolean;
    bones?: IBone[];
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLElement>;
  }

  export type SkeletonAppearance = "solid" | "soft" | "simple";

  export interface ISkeletonAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type SkeletonSizeType = "xs" | "sm" | "md" | "lg";

  export interface ISkeletonBorderColor {
    borderColorClass: string;
  }

  export interface IBone {
    type: BoneType;
    extraClass?: string;
    randomWidth?: boolean;
    animated?: boolean;
    baseUIClasses: string;
  }

  export type BoneType = "skull" | "bone";

  export interface ISkeletonSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export type BoneClassType = {
    boneClass: string;
  };

  export interface ISkeletonHook extends ISkeleton {}
  export interface IBoneHook extends IBone {}
}
