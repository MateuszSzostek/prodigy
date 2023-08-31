import React from "react";
import "./Toast.styles.css";
import { NTDToasts } from "../../../../types/toasts";
import useToast from "./useToast";

export function Toast(props: NTDToasts.IToast) {
  const {
    toastRef,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    positionClass,
  } = useToast(props);

  return (
    <div
      ref={toastRef}
      className={`slide-from-left-anim flex flex-col trans-03 p-10 m-05 ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${positionClass}`}
      style={{ maxWidth: props?.maxWidth, maxHeight: props?.maxHeight }}
    >
      <div className={`flex flex-row w-full between`}>
        {props?.Title && props?.Title}
        {props?.CloseBtn ? (
          props.CloseBtn(props?.onCloseToastHandler)
        ) : (
          <button
            onClick={props?.onCloseToastHandler}
            className={`hover-pointer bg-transparent border-none ${labelColorClass}`}
          >
            &#10005;
          </button>
        )}
      </div>

      {props?.Body && props?.Body}
    </div>
  );
}
