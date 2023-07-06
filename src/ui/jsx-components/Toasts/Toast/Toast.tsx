import React from "react";
import "./Toast.styles.css";
import { NTDToasts } from "../../../../types/toasts";

function getToastStatusClass(status: NTDToasts.ToastStatusType): string {
  switch (status) {
    case NTDToasts.ToastStatus.ERROR:
      return "toast__error";
    case NTDToasts.ToastStatus.SUCCESS:
      return "toast__success";
    case NTDToasts.ToastStatus.INFO:
      return "toast__info";
    case NTDToasts.ToastStatus.WARNING:
      return "toast__warning";
    case NTDToasts.ToastStatus.DEFAULT:
      return "toast__default";
    default:
      return "toast__default";
  }
}

export function Toast({ title, status, Body }: NTDToasts.IToast) {
  return (
    <div
      className={`toast trans-03 border-1 p-05 m-05 bg-gray-09 round-05 ${getToastStatusClass(
        status
      )}`}
    >
      <span className="toast__title">{title}</span>
      {Body}
    </div>
  );
}
