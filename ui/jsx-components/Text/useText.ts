import { NTDText } from "../../../types/text";
import { NTDUI } from "../../../types/ui";
import useUIElementStyles from "../../hooks/useUIElementStyles";

export default function useText(props: NTDText.ITextHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const textWeightClass: string = getTextWeight(props?.weight);
  const { colorClass }: NTDText.ITextColor = getTextColor(props?.color);
  const { borderColorClass }: NTDText.ITextBorderColor = getTextBorderColor(
    props?.border,
    props?.model
  );

  const Tag =
    props.as !== null ? (`${props.as}` as keyof JSX.IntrinsicElements) : `div`;

  return {
    Tag,
    roundClass,
    shadeClass,
    borderClass,
    textWeightClass,
    borderColorClass,
    colorClass,
  };
}

function getTextWeight(weight: NTDText.TextWeightType): string {
  switch (weight) {
    case "thin":
      return "f-w-300";
    case "normal":
      return "f-w-400";
    case "medium":
      return "f-w-500";
    case "semi-bold":
      return "f-w-600";
    case "bold":
      return "f-w-700";
    default:
      return "f-w-500";
  }
}

function getTextBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDText.ITextBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getTextColor(
  color: NTDUI.MetaColorType | undefined
): NTDText.ITextColor {
  return typeof color !== "undefined"
    ? { colorClass: ` color-${color}-05` }
    : { colorClass: "" };
}
