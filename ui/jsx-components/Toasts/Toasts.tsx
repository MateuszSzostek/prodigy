import React, { useEffect } from "react";
import { Toast } from "./Toast";
import { NTDToasts } from "../../../types/toasts";
import { useToastsStore } from "../../../store/useStore";
import { NTDStore } from "../../../types/store";

export function Toasts() {
  const [toasts, dispatch] = useToastsStore(({ toasts }) => toasts);

  useEffect(() => {
    if (toasts.length > 0) {
      const timeCreated = toasts[0].timestampCreated
        ? toasts[0].timestampCreated
        : Date.now();
      const toastLifeTime = 100000 - (Date.now() - timeCreated);
      const toastTimer = setTimeout(() => {
        dispatch((state: NTDStore.IToastsStore) => {
          state.toasts = state.toasts.slice(1);
          return state;
        });
      }, toastLifeTime);
      return () => {
        clearTimeout(toastTimer);
      };
    }
  }, [toasts.length]);

  return (
    <div className="t-0 l-0 h-full fixed">
      {toasts?.map((toast: NTDToasts.IToast) => (
        <Toast key={toast.timestampCreated} {...toast} />
      ))}
    </div>
  );
}
