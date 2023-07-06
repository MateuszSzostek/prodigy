import { useToastsStore } from "../../../store/useStore";
import { NTDStore } from "../../../types/store";
import { NTDToasts } from "../../../types/toasts";

export default function useToasts() {
  const [toasts, dispatch] = useToastsStore(({ toasts }) => toasts);

  function showToast(payload: NTDToasts.IToastPayload) {
    dispatch((state: NTDStore.IToastsStore) => {
      state.toasts.push({
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
