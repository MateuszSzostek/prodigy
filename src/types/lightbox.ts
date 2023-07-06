import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDLightbox {
  export interface ILightbox extends NTDUI.IUIElement, PropsWithChildren {}

  export interface ILightboxPayload {
    payload: {
      id: string;
      Component: JSX.Element;
    };
  }

  export interface ILightboxHook extends ILightbox {}
}
