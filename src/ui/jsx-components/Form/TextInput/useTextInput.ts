import { NTDTextInput } from "../../../../types/textInput";
import useUIElementStyles from "../../../hooks/useUIElementStyles";
import { NTDUI } from "../../../../types/ui";

export default function useTextInput(props: NTDTextInput.ITextInputHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const {
    bgColorClass,
    labelColorClass,
  }: NTDTextInput.ITextInputAppearanceData = getTextInputAppearance(
    props?.appearance,
    props?.model
  );
  const { borderColorClass }: NTDTextInput.ITextInputBorderColor =
    getTextInputBorderColor(props?.border, props?.model);
  const { sizeClass, labelSizeClass, errorLabelSizeClass, fieldTextSizeClass } =
    getTextInputSize(props?.size);

  return {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
    errorLabelSizeClass,
    fieldTextSizeClass,
  };
}

function getTextInputSize(
  size: NTDTextInput.TextInputSizeType | undefined
): NTDTextInput.ITextInputSize {
  switch (size) {
    case "xs":
      return {
        sizeClass: " h-175",
        labelSizeClass: " text-8",
        fieldTextSizeClass: " text-9",
        errorLabelSizeClass: " text-7",
      };
    case "sm":
      return {
        sizeClass: " h-225",
        labelSizeClass: " text-9",
        fieldTextSizeClass: " text-10",
        errorLabelSizeClass: " text-8",
      };
    case "md":
      return {
        sizeClass: " h-275",
        labelSizeClass: " text-10",
        fieldTextSizeClass: " text-11",
        errorLabelSizeClass: " text-9",
      };
    case "lg":
      return {
        sizeClass: " h-325",
        labelSizeClass: " text-11",
        fieldTextSizeClass: " text-12",
        errorLabelSizeClass: " text-10",
      };
    default:
      return {
        sizeClass: " h-275",
        labelSizeClass: " text-10",
        fieldTextSizeClass: " text-11",
        errorLabelSizeClass: " text-9",
      };
  }
}

function getTextInputBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDTextInput.ITextInputBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "gray"}-0` }
    : { borderColorClass: "" };
}

function getTextInputAppearance(
  appearance: NTDTextInput.TextInputAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDTextInput.ITextInputAppearanceData {
  switch (appearance) {
    case "solid":
      return {
        bgColorClass: color ? ` bg-${color}-05` : " bg-transparent",
        labelColorClass: color ? ` color-${color}-01` : " color-gray-01",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-08` : " bg-blue-08",
        labelColorClass: color ? ` color-${color}-04` : " color-gray-01",
      };
    default:
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: color ? ` color-${color}-04` : " color-gray-01",
      };
  }
}
