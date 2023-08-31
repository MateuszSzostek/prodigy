import React from "react";
import { NTDBadge } from "../../../types/badge";
import useUIElementStyles from "../../hooks/useUIElementStyles";
import { NTDUI } from "../../../types/ui";

export default function useBadge(props: NTDBadge.IBadgeHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDBadge.IBadgeAppearanceData =
    getBadgeAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDBadge.IBadgeBorderColor = getBadgeBorderColor(
    props?.border,
    props?.model
  );
  const { sizeClass, labelSizeClass } = getBadgeSize(props?.size);

  return {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
  };
}

function getBadgeSize(
  size: NTDBadge.BadgeSizeType | undefined
): NTDBadge.IBadgeSize {
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

function getBadgeBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDBadge.IBadgeBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getBadgeAppearance(
  appearance: NTDBadge.BadgeAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDBadge.IBadgeAppearanceData {
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
