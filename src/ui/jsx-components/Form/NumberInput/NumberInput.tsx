import React from "react";
import useNumberInput from "./useNumberInput";
import { NTDNumberInput } from "../../../../types/numberInput";

export function NumberInput(props: NTDNumberInput.INumberInput) {
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
    fieldNumberSizeClass,
    numberInputValue,
    onChangeHandler,
    validationErrors,
  } = useNumberInput(props);

  return (
    <div
      data-cy="number-input"
      className={`number-input__container relative ${
        typeof props?.extraClass !== "undefined" ? props?.extraClass : ""
      } trans-03`}
    >
      {props?.label && (
        <label
          data-cy="number-input-label"
          className={`number-input__label ${labelColorClass}${labelSizeClass}`}
        >
          {props?.label}
        </label>
      )}
      <input
        data-cy="number-input-field"
        className={`number-input__field h-full w-full border-box p-03 appearance-none font-trebuchet${bgColorClass}${roundClass}${shadeClass}${borderClass}${borderColorClass}${fieldNumberSizeClass}${sizeClass}`}
        type="number"
        {...props?.base}
        {...props?.register}
        onChange={onChangeHandler}
        value={numberInputValue}
      />
      <div className="flex flex-col">
        {validationErrors &&
          validationErrors?.map((e) => (
            <label
              key={e}
              data-cy="number-input-error-label"
              className={`number-input__error-label color-red-05 ${errorLabelSizeClass}`}
            >
              {e}
            </label>
          ))}
      </div>

      {props.children}
    </div>
  );
}
