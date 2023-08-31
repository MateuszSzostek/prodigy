import { NTDNumberInput } from "../../../../types/numberInput";
import useUIElementStyles from "../../../hooks/useUIElementStyles";
import { NTDUI } from "../../../../types/ui";
import { useEffect, useState } from "react";
import useValidationErrors from "../InternalFormHooks/useValidationErrors";

export default function useNumberInput(props: NTDNumberInput.INumberInputHook) {
  const [numberInputValue, setNumberInputValue] = useState<string>("");
  const { validationErrors } = useValidationErrors(props?.register?.name);

  useEffect(() => {
    if (props?.base?.value) {
      setNumberInputValue(props?.base?.value as string);
    }
    if (props?.value) {
      setNumberInputValue(props?.value);
    }
  }, [props?.value]);
  //@ts-ignore
  const onChangeHandler = (e) => {
    setNumberInputValue(e?.target?.value);
    if (props?.base?.onChange) {
      props?.base?.onChange(e);
    }
    if (props?.register?.onChange) {
      props?.register?.onChange(e);
    }
  };

  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const {
    bgColorClass,
    labelColorClass,
  }: NTDNumberInput.INumberInputAppearanceData = getNumberInputAppearance(
    props?.appearance,
    props?.model
  );
  const { borderColorClass }: NTDNumberInput.INumberInputBorderColor =
    getNumberInputBorderColor(props?.border, props?.model);
  const {
    sizeClass,
    labelSizeClass,
    errorLabelSizeClass,
    fieldNumberSizeClass,
  } = getNumberInputSize(props?.size);
  //@ts-ignore
  function onInputValueChangeHandler(e) {
    setNumberInputValue(e?.detail?.value);
  }

  useEffect(() => {
    window.addEventListener(
      `oninputvaluechange-${props.register.name}`,
      onInputValueChangeHandler
    );
    return () => {
      window.removeEventListener(
        `oninputvaluechange-${props.register.name}`,
        onInputValueChangeHandler
      );
    };
  }, [props.register.name]);

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
    fieldNumberSizeClass,
    numberInputValue,
    onChangeHandler,
    validationErrors,
  };
}

function getNumberInputSize(
  size: NTDNumberInput.NumberInputSizeType | undefined
): NTDNumberInput.INumberInputSize {
  switch (size) {
    case "xs":
      return {
        sizeClass: " h-175",
        labelSizeClass: " text-8",
        fieldNumberSizeClass: " text-9",
        errorLabelSizeClass: " text-7",
      };
    case "sm":
      return {
        sizeClass: " h-225",
        labelSizeClass: " text-9",
        fieldNumberSizeClass: " text-10",
        errorLabelSizeClass: " text-8",
      };
    case "md":
      return {
        sizeClass: " h-275",
        labelSizeClass: " text-10",
        fieldNumberSizeClass: " text-11",
        errorLabelSizeClass: " text-9",
      };
    case "lg":
      return {
        sizeClass: " h-325",
        labelSizeClass: " text-11",
        fieldNumberSizeClass: " text-12",
        errorLabelSizeClass: " text-10",
      };
    default:
      return {
        sizeClass: " h-275",
        labelSizeClass: " text-10",
        fieldNumberSizeClass: " text-11",
        errorLabelSizeClass: " text-9",
      };
  }
}

function getNumberInputBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDNumberInput.INumberInputBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "gray"}-05` }
    : { borderColorClass: "" };
}

function getNumberInputAppearance(
  appearance: NTDNumberInput.NumberInputAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDNumberInput.INumberInputAppearanceData {
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
