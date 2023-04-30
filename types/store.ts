import { NTDToasts } from "./toasts";

export namespace NTDStore {
  export interface IStore {
    store: {
      counter: number;
    };
    prodigy: {
      toasts: NTDToasts.IToast[];
    };
  }
}
