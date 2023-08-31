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
  const { sizeClass, labelSizeClass } = getButtonSize(props?.size);

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

function getButtonSize(
  size: NTDButton.ButtonSizeType | undefined
): NTDButton.IButtonSize {
  switch (size) {
    case "xs":
      return { sizeClass: " h-175 py-02", labelSizeClass: " text-8" };
    case "sm":
      return { sizeClass: " h-225 py-05", labelSizeClass: " text-9" };
    case "md":
      return { sizeClass: " h-275 py-05", labelSizeClass: " text-10" };
    case "lg":
      return { sizeClass: " h-325 py-05", labelSizeClass: " text-11" };
    default:
      return { sizeClass: " h-275 py-05", labelSizeClass: " text-10" };
  }
}

function getButtonBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDButton.IButtonBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getButtonAppearance(
  appearance: NTDButton.ButtonAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
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
