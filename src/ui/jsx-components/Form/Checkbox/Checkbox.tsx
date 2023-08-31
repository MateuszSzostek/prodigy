import React from "react";
import { NTDCheckbox } from "../../../../types/checkbox";
import useCheckbox from "./useCheckbox";

export default function Checkbox(props: NTDCheckbox.ICheckbox) {
  const {
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
  } = useCheckbox(props);

  return (
    <div
      data-cy="checkbox"
      className={`checkbox__container relative flex flex-col hover-pointer  ${
        props?.extraClass ? props?.extraClass : ""
      }`}
    >
      <div className="flex flex-row flex-center-v">
        <div
          data-cy="checkbox-box"
          className={`checkbox__box w-100 h-100 m-04 overflow-hidden ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${sizeClass}`}
        >
          <div
            data-cy="checkbox-checkmark-box"
            className={`checkbox__checkmark-box relative flex flex-center-v flex-center-h w-100 h-100 trans-01 opacity-0 ${sizeClass}${bgCheckedColorClass}${checkmarkColorClass}${
              isChecked === true ? " visible opacity-1" : " hidden"
            }`}
          >
            {" "}
            <span
              data-cy="checkbox-checkmark"
              className="checkbox__checkmark absolute"
            >
              &#x2713;
            </span>
          </div>
        </div>
        {props?.label && (
          <label
            data-cy="checkbox-label"
            htmlFor={props?.name}
            className={`checkbox__label ml-05 block ${labelSizeClass}`}
          >
            {props?.label}
          </label>
        )}
      </div>

      <input
        data-cy="checkbox-input"
        type="checkbox"
        id={props?.id}
        name={props?.name}
        className={`checkbox__input appearance-none w-full h-full absolute hover-pointer`}
        {...props?.register}
        {...props?.base}
        onClick={onCheckboxClickHandler}
      />
      <div className="flex flex-col">
        {validationErrors &&
          validationErrors?.map((error) => (
            <label
              key={error}
              data-cy="checkbox-error-label"
              className={`checkbox__error-label color-red-05`}
            >
              {error}
            </label>
          ))}
      </div>
    </div>
  );
}
