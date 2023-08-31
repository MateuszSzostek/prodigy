import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDAvatar {
  export interface IAvatar extends NTDUI.IUIElement, PropsWithChildren {
    size?: AvatarSizeType;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLDivElement>;
    label?: string;
    image?: string;
    status?: AvatarOnlineStatusType;
  }

  export type AvatarAppearance = "solid" | "soft" | "simple";

  export interface IAvatarAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface IAvatarOnlineStatusData {
    onlineStatusClass: string;
  }

  export type AvatarOnlineStatusType = "online" | "offline" | "away";

  export type AvatarSizeType = "xs" | "sm" | "md" | "lg";

  export interface IAvatarBorderColor {
    borderColorClass: string;
  }

  export interface IAvatarSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface IAvatarHook extends IAvatar {}
}
