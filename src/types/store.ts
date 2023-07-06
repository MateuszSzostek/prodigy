import { NTDToasts } from "./toasts";

export namespace NTDStore {
  export interface ICounterStore {
    counter: number;
  }
  export interface IToastsStore {
    toasts: NTDToasts.IToast[];
  }
  export interface ILightboxStore {
    isActive: boolean;
    content: {
      id: string;
      Component: JSX.Element;
    }[];
  }
}
