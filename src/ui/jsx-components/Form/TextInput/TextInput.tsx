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
    textInputValue,
    onChangeHandler,
    validationErrors,
  } = useTextInput(props);

  return (
    <div
      data-cy="text-input"
      className={`text-input__container relative ${
        typeof props?.extraClass !== "undefined" ? props?.extraClass : ""
      } trans-03`}
    >
      {props?.label && (
        <label
          data-cy="text-input-label"
          className={`text-input__label ${labelColorClass}${labelSizeClass}`}
        >
          {props?.label}
        </label>
      )}
      <input
        data-cy="text-input-field"
        className={`text-input__field h-full w-full border-box p-03${bgColorClass}${roundClass}${shadeClass}${borderClass}${borderColorClass}${fieldTextSizeClass}${sizeClass}`}
        type="text"
        {...props?.base}
        {...props?.register}
        onChange={onChangeHandler}
        value={textInputValue}
      />
      <div className="flex flex-col">
        {validationErrors &&
          validationErrors?.map((e) => (
            <label
              key={e}
              data-cy="text-input-error-label"
              className={`text-input__error-label color-red-05 ${errorLabelSizeClass}`}
            >
              {e}
            </label>
          ))}
      </div>

      {props.children}
    </div>
  );
}
