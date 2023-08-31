import React, { useRef } from "react";
import { NTDUI } from "../../../../types/ui";
import { NTDToasts } from "../../../../types/toasts";
import useUIElementStyles from "../../../hooks/useUIElementStyles";

export default function useToast(props: NTDToasts.IToastHook) {
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDToasts.IToastAppearanceData =
    getToastAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDToasts.IToastBorderColor = getToastBorderColor(
    props?.border,
    props?.model
  );
  const { positionClass } = getPosition(props?.positionX, props?.positionY);

  const toastRef = useRef(null);

  return {
    toastRef,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    positionClass,
  };
}

function getToastBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDToasts.IToastBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getToastAppearance(
  appearance: NTDToasts.ToastAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDToasts.IToastAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-05` : " bg-blue-05",
        labelColorClass: color ? ` color-${color}-10` : " color-blue-10",
      };
  }
}

function getPosition(
  positionX: NTDToasts.ToastPositionXType = "right",
  positionY: NTDToasts.ToastPositionYType = "top"
): NTDToasts.IToastPosition {
  let posX = getPositionX(positionX);
  let posY = getPositionY(positionY);
  return { positionClass: `${posX}${posY}` };
}

function getPositionX(
  positionX: NTDToasts.ToastPositionXType = "right"
): string {
  switch (positionX) {
    case "center":
      return " l-50vw";
    case "left":
      return " l-0";
    default:
      return " r-0";
  }
}

function getPositionY(positionX: NTDToasts.ToastPositionYType = "top"): string {
  switch (positionX) {
    case "center":
      return " t-50vh ";
    case "bottom":
      return " b-0";
    default:
      return " t-0";
  }
}
