import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export declare namespace NTDButton {
    interface IButton extends NTDUI.IUIElement, PropsWithChildren {
        size?: ButtonSizeType;
        bold?: boolean;
        appearance?: "solid" | "soft" | "simple";
        base?: React.HTMLProps<HTMLButtonElement>;
    }
    type ButtonAppearance = "solid" | "soft" | "simple";
    interface IButtonAppearanceData {
        bgColorClass: string;
        labelColorClass: string;
    }
    type ButtonSizeType = "xs" | "sm" | "md" | "lg";
    interface IButtonBorderColor {
        borderColorClass: string;
    }
    interface IButtonSize {
        sizeClass: string;
        labelSizeClass: string;
    }
    interface IButtonHook extends IButton {
    }
}
