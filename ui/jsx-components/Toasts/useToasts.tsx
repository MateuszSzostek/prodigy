import React from "react";
import { useStore } from "../../../store/useStore";
import { NTDStore } from "../../../types/store";
import { NTDToasts } from "../../../types/toasts";

export default function useToasts() {
  const [toasts, dispatch] = useStore(({ prodigy }) => prodigy.toasts);

  function showToast(payload: NTDToasts.IToastPayload) {
    dispatch((state: NTDStore.IStore) => {
      state.prodigy.toasts.push({
        title: payload.title,
        status: payload.status,
        Body: payload.Body,
        timestampCreated: Date.now(),
      });
      return state;
    });
  }

  return { toasts, showToast };
}
