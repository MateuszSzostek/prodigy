import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export declare namespace NTDTextInput {
    interface ITextInput extends NTDUI.IUIElement, PropsWithChildren {
        valid?: boolean;
        isDirty?: boolean;
        errorMessage?: string;
    }
    interface ITextInputHook extends ITextInput {
    }
}
