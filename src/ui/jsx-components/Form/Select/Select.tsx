import React from "react";
import { NTDSelect } from "../../../../types/select";
import ChevronSVG from "../../../assets/graphic/components/chevron";
import useSelect from "./useSelect";
import { blockNoRefStr } from "../../../../utils";

export default function Select(props: NTDSelect.ISelect) {
  const {
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
  } = useSelect(props);

  return (
    <div
      data-cy="select"
      className={`select__container relative my-05 ${blockNoRefStr(
        props?.extraClass
      )}`}
      ref={selectRef}
    >
      <select
        data-cy="select-field"
        name={props?.name}
        id={props?.id}
        className={`select__field appearance-none w-full absolute z-10 t-0 hover-pointer `}
        //@ts-ignore
        value={props?.options[selected]?.id ?? null}
        {...props?.register}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          height: "68px",
        }}
      >
        {showFirstOption === true && (
          <option
            value="none"
            style={{
              display: "none",
              appearance: "none",
              height: 0,
            }}
          />
        )}
        {props?.options &&
          props?.options?.map((el, idx) => (
            <option
              data-cy={`select-option-${idx}`}
              key={el?.id}
              value={el?.id}
              style={{
                display: "none",
                appearance: "none",
                height: 0,
              }}
            />
          ))}
      </select>
      {props?.label && (
        <label
          data-cy="select-label"
          className={`select__label ${labelSizeClass}${labelColorClass}`}
        >
          {props?.label}
        </label>
      )}
      <div
        data-cy="select-box"
        className={`select__box flex flex-center-v border-box h-full w-full overflow-hidden flex ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${sizeClass}`}
      >
        {showFirstOption === true ? (
          <div
            data-cy="select-no-choosen-option"
            className="select__no-choosen-option p-03 hover-bg-gray-09 trans-03"
          >
            Select an option...
          </div>
        ) : (
          //@ts-ignore
          props?.options && props?.options[selected]?.Selectable
        )}

        <ChevronSVG
          customClass={`absolute r-05 trans-03 ${chevronColorClass} ${
            isOpen === true ? "rotate-z-270" : "rotate-z-90"
          }`}
        />
      </div>

      <div
        data-cy="select-options-box"
        className={`select__options-box w-full border-box absolute hover-pointer z-15 overflow-hidden trans-03 ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${
          isOpen === true
            ? ` opacity-1 ${sizeClass}`
            : " hidden opacity-0 h-0 p-0"
        }`}
      >
        {props?.options &&
          props?.options?.map(
            (el, idx) =>
              typeof el?.Selectable !== "undefined" && (
                <div
                  tabIndex={0}
                  data-cy={`select-selectable-option-${idx}`}
                  key={idx}
                  className="select__selectable-option p-03 hover-bg-gray-09 trans-03"
                  onClick={(e) => {
                    handleOnSelectClickHandler(e, idx);
                    props?.register?.onBlur(e);
                  }}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13 || e.keyCode === 32) {
                      e.preventDefault();
                      handleOnSelectClickHandler(e, idx);
                      props?.register?.onBlur(e);
                    }
                  }}
                  onBlur={props?.register?.onBlur}
                >
                  {el?.Selectable}
                </div>
              )
          )}
      </div>
      <div className="flex flex-col">
        {validationErrors &&
          validationErrors?.map((error) => (
            <label
              key="error"
              data-cy="select-error-label"
              className={`select__error-label color-red-05`}
            >
              {error}
            </label>
          ))}
      </div>
    </div>
  );
}
