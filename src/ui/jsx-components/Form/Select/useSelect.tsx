import React, { useEffect, useRef, useState } from "react";
import { NTDSelect } from "../../../../types/select";
import { NTDUI } from "../../../../types/ui";
import useUIElementStyles from "../../../hooks/useUIElementStyles";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import useValidationErrors from "../InternalFormHooks/useValidationErrors";

export default function useSelect(props: NTDSelect.ISelectHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDSelect.ISelectAppearanceData =
    getSelectAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDSelect.ISelectBorderColor =
    getSelectBorderColor(props?.border, props?.model);
  const { sizeClass, labelSizeClass } = getSelectSize(props?.size);
  const { chevronColorClass } = getSelectChevronColor(props?.model);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFirstOption, setShowFirstOption] = useState<boolean>(true);
  const { validationErrors } = useValidationErrors(props?.register?.name);

  const selectRef = useRef(null);

  useOutsideClick(selectRef, () => {
    if (isOpen === true) setIsOpen(false);
  });
  //@ts-ignore
  function handleOnSelectClickHandler(e, idx) {
    setIsOpen(false);
    setSelected(idx);
    setShowFirstOption(false);
    if (props?.base?.onClick) {
      props?.base?.onClick(e);
    }
  }

  useEffect(() => {
    if (selected !== null) {
      //@ts-ignore
      const event = { currentTarget: { value: props?.options[selected]?.id } };

      props?.register?.onChange(event);
    } else {
      const event = { currentTarget: { value: null } };

      props?.register?.onChange(event);
    }
  }, [selected]);
  //@ts-ignore
  function onInputValueChangeHandler(e) {
    setSelected(e?.detail?.value);
    setShowFirstOption(e?.detail?.extra?.setNoOption);
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

  return {
    chevronColorClass,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
    labelColorClass,
    isOpen,
    showFirstOption,
    selectRef,
    setIsOpen,
    selected,
    setSelected,
    setShowFirstOption,
    handleOnSelectClickHandler,
    validationErrors,
  };
}

function getSelectSize(
  size: NTDSelect.SelectSizeType | undefined
): NTDSelect.ISelectSize {
  switch (size) {
    case "xs":
      return { sizeClass: " p-02", labelSizeClass: " text-8" };
    case "sm":
      return { sizeClass: " p-04", labelSizeClass: " text-9" };
    case "md":
      return { sizeClass: " p-06", labelSizeClass: " text-10" };
    case "lg":
      return { sizeClass: " p-08", labelSizeClass: " text-11" };
    default:
      return { sizeClass: " p-06", labelSizeClass: " text-10" };
  }
}

function getSelectBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDSelect.ISelectBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getSelectChevronColor(
  color: NTDUI.MetaColorType | undefined
): NTDSelect.ISelectChevronColor {
  return { chevronColorClass: ` color-${color ? color : "blue"}-05` };
}

function getSelectAppearance(
  appearance: NTDSelect.SelectAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDSelect.ISelectAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-gray-10`,
        labelColorClass: "",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        labelColorClass: "",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        labelColorClass: "",
      };
  }
}
