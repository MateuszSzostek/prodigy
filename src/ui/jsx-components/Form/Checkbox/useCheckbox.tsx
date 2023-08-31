import React, { useEffect, useState } from "react";
import { NTDCheckbox } from "../../../../types/checkbox";
import { NTDUI } from "../../../../types/ui";
import useUIElementStyles from "../../../hooks/useUIElementStyles";
import useValidationErrors from "../InternalFormHooks/useValidationErrors";

export default function useCheckbox(props: NTDCheckbox.ICheckboxHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const {
    bgColorClass,
    bgCheckedColorClass,
    checkmarkColorClass,
  }: NTDCheckbox.ICheckboxAppearanceData = getCheckboxAppearance(
    props?.appearance,
    props?.model
  );
  const { borderColorClass }: NTDCheckbox.ICheckboxBorderColor =
    getCheckboxBorderColor(props?.border, props?.model);
  const { sizeClass, labelSizeClass } = getCheckboxSize(props?.size);
  const { validationErrors } = useValidationErrors(props?.register?.name);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  //@ts-ignore
  function onCheckboxClickHandler(e) {
    e.preventDefault();
    setIsChecked(!isChecked);
    //@ts-ignore
    props?.base?.onClick(e);
  }
  //@ts-ignore
  function onInputValueChangeHandler(e) {
    setIsChecked(e?.detail?.value);
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

  useEffect(() => {
    const event = { currentTarget: { value: isChecked } };
    props?.register?.onChange(event);
  }, [isChecked]);

  useEffect(() => {
    if (props?.checked) {
      setIsChecked(props?.checked);
    } else {
      setIsChecked(false);
    }
  }, [props?.checked]);

  return {
    onCheckboxClickHandler,
    isChecked,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
    bgCheckedColorClass,
    checkmarkColorClass,
    validationErrors,
  };
}

function getCheckboxSize(
  size: NTDCheckbox.CheckboxSizeType | undefined
): NTDCheckbox.ICheckboxSize {
  switch (size) {
    case "xs":
      return { sizeClass: " h-075 w-075", labelSizeClass: " text-8" };
    case "sm":
      return { sizeClass: " h-110 w-110", labelSizeClass: " text-9" };
    case "md":
      return { sizeClass: " h-145 w-145", labelSizeClass: " text-10" };
    case "lg":
      return { sizeClass: " h-175 w-175", labelSizeClass: " text-11" };
    default:
      return { sizeClass: " h-145 w-145", labelSizeClass: " text-10" };
  }
}

function getCheckboxBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDCheckbox.ICheckboxBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getCheckboxAppearance(
  appearance: NTDCheckbox.CheckboxAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDCheckbox.ICheckboxAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        bgCheckedColorClass: ` bg-transparent`,
        checkmarkColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        bgCheckedColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        checkmarkColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        bgCheckedColorClass: color ? ` bg-${color}-05` : " bg-blue-05",
        checkmarkColorClass: color ? ` color-${color}-10` : " color-blue-10",
      };
  }
}
