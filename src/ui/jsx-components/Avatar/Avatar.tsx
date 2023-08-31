import React from "react";
import { NTDAvatar } from "../../../types/avatar";
import useAvatar from "./useAvatar";

export default function Avatar(props: NTDAvatar.IAvatar) {
  const {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
    onlineStatusClass,
  } = useAvatar(props);

  return (
    <div className={`avatar__container`}>
      {props?.image ? (
        <img
          className={`avatar__image ${roundClass}${shadeClass}${borderClass}${borderColorClass}${sizeClass}`}
          src={props?.image}
          alt="Avatar image"
        />
      ) : (
        <div
          className={`avatar__image-placeholder ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${sizeClass}`}
        >
          {props?.label && (
            <span
              className={`avatar__text ${labelColorClass}${labelSizeClass}`}
            >
              {props?.label}
            </span>
          )}
        </div>
      )}
      <div
        className={`avatar__online-status absolute r-0 b-0 ${onlineStatusClass}`}
      />
    </div>
  );
}
