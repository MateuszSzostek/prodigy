import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export declare namespace NTDLightbox {
    interface ILightbox extends NTDUI.IUIElement, PropsWithChildren {
    }
    interface ILightboxPayload {
        payload: {
            id: string;
            Component: JSX.Element;
        };
    }
    interface ILightboxHook extends ILightbox {
    }
}
