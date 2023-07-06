import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export declare namespace NTDText {
    interface IText extends NTDUI.IUIElement, PropsWithChildren {
        as?: JSX.IntrinsicElements;
        weight?: TextWeightType;
        italic?: boolean;
        color?: NTDUI.MetaColorType;
    }
    type TextWeightType = "thin" | "normal" | "medium" | "semi-bold" | "bold";
    interface ITextBorderColor {
        borderColorClass: string;
    }
    interface ITextColor {
        colorClass: string;
    }
    interface ITextHook extends IText {
    }
}
