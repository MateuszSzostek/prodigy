import { NTDUI } from "./ui";
import { TableHTMLAttributes, PropsWithChildren } from "react";
export namespace NTDTable {
  export interface ITable extends NTDUI.IUIElement, PropsWithChildren {
    size?: TableSizeType;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";
    base?: React.HTMLProps<HTMLTableElement>;
    columns?: {
      selector: string;
      width: string;
      header: () => JSX.Element | string;
      cell: (cell: any, idx: number) => JSX.Element | string;
    }[];
    data?: {
      [selector: string]: any;
    }[];
    itemsPerPage?: number;
    title?: string;
    headersExtraClass?: string;
    rowsExtraClass?: string;
    cellsExtraClass?: string;
  }

  export type TableAppearance = "solid" | "soft" | "simple";

  export interface ITableAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export type TableSizeType = "xs" | "sm" | "md" | "lg";

  export interface ITableBorderColor {
    borderColorClass: string;
  }

  export interface ITableSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface ITableHook extends ITable {}
}

const testData = [
  {
    name: "fgdfs",
    value: "dsggadfga",
    amount: "",
  },
  {
    name: "fgdfs",
    value: "dsggadfga",
    amount: "",
  },
  {
    name: "fgdfs",
    value: "dsggadfga",
    amount: "",
  },
];
