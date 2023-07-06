/// <reference types="react" />
import { NTDToasts } from "./toasts";
export declare namespace NTDStore {
    interface ICounterStore {
        counter: number;
    }
    interface IToastsStore {
        toasts: NTDToasts.IToast[];
    }
    interface ILightboxStore {
        isActive: boolean;
        content: {
            id: string;
            Component: JSX.Element;
        }[];
    }
}
