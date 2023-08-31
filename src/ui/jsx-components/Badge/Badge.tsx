import React from "react";
import { NTDBadge } from "../../../types/badge";
import useBadge from "./useBadge";

export default function Badge(props: NTDBadge.IBadge) {
  const {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
  } = useBadge(props);

  return (
    <div
      tabIndex={0}
      data-cy="badge"
      className={`badge__container inline-block text-bold no-outline px-05 py-02 hover-pointer ${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${sizeClass}${roundClass}`}
      {...props?.base}
    >
      {props?.label && (
        <span
          data-cy="badge-text"
          className={`badge__text ${labelColorClass}${labelSizeClass}`}
        >
          {props?.label}
        </span>
      )}
      {typeof props?.onDeleteHandler !== "undefined" && (
        <button
          data-cy="badge-close-btn"
          onClick={props?.onDeleteHandler}
          className={`badge__close-btn hover-pointer bg-transparent border-none p-0 pl-04 ${labelColorClass}${labelSizeClass}`}
        >
          &#10005;
        </button>
      )}
    </div>
  );
}
