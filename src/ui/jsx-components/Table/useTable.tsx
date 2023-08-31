import React, { useState } from "react";
import { NTDTable } from "../../../types/table";
import { NTDUI } from "../../../types/ui";
import useUIElementStyles from "../../hooks/useUIElementStyles";

export default function useTable(props: NTDTable.ITableHook) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDTable.ITableAppearanceData =
    getTableAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDTable.ITableBorderColor = getTableBorderColor(
    props?.border,
    props?.model
  );
  const { sizeClass, labelSizeClass } = getTableSize(props?.size);

  function getMiddlePagination(
    length: number = 0,
    currentPage: number
  ): number[] {
    let idxs = [];

    const numButtonsToShow = 5; // Number of
    const halfNumButtons = Math.floor(numButtonsToShow / 2);

    let startPage = Math.max(currentPage - halfNumButtons, 1);
    let endPage = Math.min(startPage + numButtonsToShow - 1, length);

    if (endPage - startPage + 1 < numButtonsToShow) {
      startPage = Math.max(endPage - numButtonsToShow + 1, 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      if (page !== 1 && page !== length) {
        idxs.push(page);
      }
    }

    return idxs;
  }

  return {
    currentPage,
    setCurrentPage,
    getMiddlePagination,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
  };
}

function getTableSize(
  size: NTDTable.TableSizeType | undefined
): NTDTable.ITableSize {
  switch (size) {
    case "xs":
      return { sizeClass: " h-175 py-02", labelSizeClass: " text-8" };
    case "sm":
      return { sizeClass: " h-225 py-05", labelSizeClass: " text-9" };
    case "md":
      return { sizeClass: " h-275 py-05", labelSizeClass: " text-10" };
    case "lg":
      return { sizeClass: " h-325 py-05", labelSizeClass: " text-11" };
    default:
      return { sizeClass: " h-275 py-05", labelSizeClass: " text-10" };
  }
}

function getTableBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDTable.ITableBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "gray"}-05` }
    : { borderColorClass: "" };
}

function getTableAppearance(
  appearance: NTDTable.TableAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDTable.ITableAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: color ? ` color-${color}-05` : " color-gray-01",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-gray-10",
        labelColorClass: color ? ` color-${color}-05` : " color-gray-05",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-05` : " bg-gray-05",
        labelColorClass: color ? ` color-${color}-10` : " color-gray-10",
      };
  }
}
