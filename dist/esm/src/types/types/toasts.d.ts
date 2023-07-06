/// <reference types="react" />
export declare namespace NTDToasts {
    interface IToast extends IToastPayload {
        timestampCreated?: number;
    }
    interface IToastPayload {
        title: string;
        status: ToastStatusType;
        maxWidth?: string;
        maxHeight?: string;
        small?: boolean;
        bold?: boolean;
        appearance?: "solid" | "soft" | "simple";
        Body: JSX.Element;
    }
    interface IToastHook extends IToast {
    }
    type ToastStatusType = "ERROR" | "SUCCESS" | "WARNING" | "INFO" | "DEFAULT";
    const ToastStatus: {
        ERROR: string;
        SUCCESS: string;
        WARNING: string;
        INFO: string;
        DEFAULT: string;
    };
}
