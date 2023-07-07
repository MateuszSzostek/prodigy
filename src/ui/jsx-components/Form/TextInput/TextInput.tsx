import React from "react";
import useTextInput from "./useTextInput";
import { NTDTextInput } from "../../../../types/textInput";

export function TextInput(props: NTDTextInput.ITextInput) {
  const {
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
  } = useTextInput(props);

  return (
    <div
      className={`relative ${
        typeof props?.extraClass !== "undefined" ? props?.extraClass : ""
      } trans-03`}
      {...props.base}
    >
      {props?.label && (
        <label className={`${labelColorClass}${labelSizeClass}`}>
          {props?.label}
        </label>
      )}
      <input
        className={`h-full w-full border-box p-03${bgColorClass}${roundClass}${shadeClass}${borderClass}${borderColorClass}${fieldTextSizeClass}${sizeClass}`}
        type="text"
      />
      {props?.error && (
        <label className={`color-red-05 ${errorLabelSizeClass}`}>
          {props?.error}
        </label>
      )}
      {props.children}
    </div>
  );
}
