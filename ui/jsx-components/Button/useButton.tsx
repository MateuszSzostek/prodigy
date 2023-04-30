import React from "react";
import { NTDButton } from "../../../types/button";
import useUIElementStyles from "../../hooks/useUIElementStyles";
import { NTDUI } from "../../../types/ui";

export default function useButton(props: NTDButton.IButtonHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDButton.IButtonAppearanceData =
    getButtonAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDButton.IButtonBorderColor =
    getButtonBorderColor(props?.border, props?.model);
  const { sizeClass } = getButtonSize(props?.small);

  return {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
  };
}

function getButtonSize(small: boolean): NTDButton.IButtonSize {
  return { sizeClass: ` h-${small === true ? "225" : "275"}` };
}

function getButtonBorderColor(
  border: boolean,
  color: NTDUI.MetaColorType
): NTDButton.IButtonBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getButtonAppearance(
  appearance: NTDButton.ButtonAppearance = "solid",
  color: NTDUI.MetaColorType
): NTDButton.IButtonAppearanceData {
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
