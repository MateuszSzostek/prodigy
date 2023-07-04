import React from "react";
import useIcon from "./useIcon";
import { NTDIcon } from "../../../types/icon";
import "./Icon.styles.css";

export function Icon(props: NTDIcon.IIcon) {
  const {} = useIcon(props);

  const {} = props;

  return (
    <div
      style={{ width: props.width, height: props.height }}
      className="icon__wrapper"
    ></div>
  );
}
