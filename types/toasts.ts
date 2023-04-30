export namespace NTDToasts {
  export interface IToast extends IToastPayload {
    timestampCreated?: number;
  }

  export interface IToastPayload {
    title: string;
    status: ToastStatusType;
    Body: JSX.Element;
  }

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
