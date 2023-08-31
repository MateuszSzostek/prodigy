import { NTDTextInput } from "../../../../types/textInput";
import useUIElementStyles from "../../../hooks/useUIElementStyles";
import { NTDUI } from "../../../../types/ui";
import { useEffect, useState } from "react";
import useValidationErrors from "../InternalFormHooks/useValidationErrors";

export default function useTextInput(props: NTDTextInput.ITextInputHook) {
  const [textInputValue, setTextInputValue] = useState<string>("");
  const { validationErrors } = useValidationErrors(props?.register?.name);

  useEffect(() => {
    if (props?.base?.value) {
      setTextInputValue(props?.base?.value as string);
    }
    if (props?.value) {
      setTextInputValue(props?.value);
    }
  }, [props?.value]);
  //@ts-ignore
  const onChangeHandler = (e) => {
    setTextInputValue(e?.target?.value);
    if (props?.base?.onChange) {
      props?.base?.onChange(e);
    }
    if (props?.register?.onChange) {
      props?.register?.onChange(e);
    }
  };
  //@ts-ignore
  function onInputValueChangeHandler(e) {
    setTextInputValue(e?.detail?.value);
  }

  useEffect(() => {
    window.addEventListener(
      `oninputvaluechange-${props?.register?.name}`,
      onInputValueChangeHandler
    );
    return () => {
      window.removeEventListener(
        `oninputvaluechange-${props?.register?.name}`,
        onInputValueChangeHandler
      );
    };
  }, [props?.register?.name]);

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
    textInputValue,
    onChangeHandler,
    validationErrors,
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
    ? { borderColorClass: ` border-${color ? color : "gray"}-05` }
    : { borderColorClass: "" };
}

function getTextInputAppearance(
  appearance: NTDTextInput.TextInputAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDTextInput.ITextInputAppearanceData {
  switch (appearance) {
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-transparent",
        labelColorClass: " color-gray-01",
      };
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: " color-gray-01",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-08` : " bg-transparent",
        labelColorClass: " color-gray-01",
      };
  }
}
