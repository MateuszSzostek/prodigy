import React from "react";
import useButton from "./useButton";
import { NTDButton } from "../../../types/button";
import "./Button.styles.css";

export default function Button(props: NTDButton.IButton) {
  const {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
  } = useButton(props);

  return (
    //@ts-ignore
    <button
      data-cy="btn"
      className={`${
        props?.extraClass ? props?.extraClass : ""
      } btn px-10 text-bold no-outline trans-03 hover-bright hover-pointer${sizeClass}${roundClass}${shadeClass}${borderClass}${bgColorClass}${labelColorClass}${borderColorClass}${labelSizeClass}`}
      {...props.base}
    >
      {props.children}
    </button>
  );
}
