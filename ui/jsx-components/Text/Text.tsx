import React from "react";
import useText from "./useText";
import { NTDText } from "../../../types/text";

export function Text(props: NTDText.IText) {
  const {
    Tag,
    roundClass,
    shadeClass,
    borderClass,
    textWeightClass,
    borderColorClass,
    colorClass,
  } = useText(props);

  return (
    <Tag
      className={`${roundClass}${shadeClass}${borderClass}${textWeightClass}${borderColorClass}${colorClass}`}
    >
      {props.children}
    </Tag>
  );
}
