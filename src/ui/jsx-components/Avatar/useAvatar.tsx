import React from "react";
import { NTDAvatar } from "../../../types/avatar";
import useUIElementStyles from "../../hooks/useUIElementStyles";
import { NTDUI } from "../../../types/ui";

export default function useAvatar(props: NTDAvatar.IAvatarHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDAvatar.IAvatarAppearanceData =
    getAvatarAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDAvatar.IAvatarBorderColor =
    getAvatarBorderColor(props?.border, props?.model);
  const { sizeClass, labelSizeClass } = getAvatarSize(props?.size);
  const { onlineStatusClass } = getOnlineStatusAppearance(props?.status);

  return {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
    onlineStatusClass,
  };
}

function getAvatarSize(
  size: NTDAvatar.AvatarSizeType | undefined
): NTDAvatar.IAvatarSize {
  switch (size) {
    case "xs":
      return { sizeClass: " h-20", labelSizeClass: " text-8" };
    case "sm":
      return { sizeClass: " h-24", labelSizeClass: " text-9" };
    case "md":
      return { sizeClass: " h-28", labelSizeClass: " text-10" };
    case "lg":
      return { sizeClass: " h-32", labelSizeClass: " text-11" };
    default:
      return { sizeClass: " h-28", labelSizeClass: " text-10" };
  }
}

function getAvatarBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDAvatar.IAvatarBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getOnlineStatusAppearance(
  onlineStatus: NTDAvatar.AvatarOnlineStatusType = "online"
): NTDAvatar.IAvatarOnlineStatusData {
  switch (onlineStatus) {
    case "online":
      return {
        onlineStatusClass: ` green`,
      };
    case "offline":
      return {
        onlineStatusClass: " red",
      };
    case "away":
      return {
        onlineStatusClass: ` yellow`,
      };
    default:
      return {
        onlineStatusClass: ` yellow`,
      };
  }
}

function getAvatarAppearance(
  appearance: NTDAvatar.AvatarAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDAvatar.IAvatarAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-05` : " bg-blue-05",
        labelColorClass: color ? ` color-${color}-10` : " color-blue-10",
      };
  }
}
