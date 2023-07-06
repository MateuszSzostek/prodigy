import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDTextInput {
  export interface ITextInput extends NTDUI.IUIElement, PropsWithChildren {
    valid?: boolean;
    isDirty?: boolean;
    errorMessage?: string;
  }

  export interface ITextInputHook extends ITextInput {}
}
