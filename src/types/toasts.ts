import { NTDUI } from "./ui";

export namespace NTDToasts {
  export interface IToast extends IToastPayload {
    timestampCreated?: number;
    onCloseToastHandler?: () => void;
    uuid: string;
  }

  export interface IToastPayload extends NTDUI.IUIElement {
    Title?: JSX.Element;
    maxWidth?: string;
    maxHeight?: string;
    round?: boolean;
    shade?: boolean;
    border?: boolean;
    appearance?: "solid" | "soft" | "simple";
    Body: JSX.Element;
    //@ts-ignore
    CloseBtn?: (onCloseToastHandler) => JSX.Element;
    positionX?: ToastPositionXType;
    positionY?: ToastPositionYType;
    lifeTime?: number;
  }

  export type ToastAppearance = "solid" | "soft" | "simple";

  export type ToastPositionXType = "left" | "right" | "center";

  export type ToastPositionYType = "top" | "bottom" | "center";

  export interface IToastAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface IToastBorderColor {
    borderColorClass: string;
  }

  export interface IToastPosition {
    positionClass: string;
  }

  export interface IToastSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface IToastHook extends IToast {}
}
