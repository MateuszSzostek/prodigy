import React from "react";
import useButton from "./useButton";
import { NTDButton } from "../../../types/button";

export default function Button(props: NTDButton.IButton) {
  const {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
  } = useButton(props);

  return (
    <button
      className={`btn px-10 py-05 text-10 text-bold no-outline trans-03 hover-bright hover-pointer${sizeClass}${roundClass}${shadeClass}${borderClass}${bgColorClass}${labelColorClass}${borderColorClass}`}
      {...props.base}
    >
      {props.children}
    </button>
  );
}
