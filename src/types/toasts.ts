export namespace NTDToasts {
  export interface IToast extends IToastPayload {
    timestampCreated?: number;
  }

  export interface IToastPayload {
    title: string;
    status: ToastStatusType;
    maxWidth?: string;
    maxHeight?: string;
    small?: boolean;
    bold?: boolean;
    appearance?: "solid" | "soft" | "simple";

    Body: JSX.Element;
  }

  export interface IToastHook extends IToast {}

  export type ToastStatusType =
    | "ERROR"
    | "SUCCESS"
    | "WARNING"
    | "INFO"
    | "DEFAULT";

  export const ToastStatus = {
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    WARNING: "WARNIGN",
    INFO: "INFO",
    DEFAULT: "DEFAULT",
  };
}
