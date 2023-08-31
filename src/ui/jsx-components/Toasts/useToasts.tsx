import { useToastsStore } from "../../../store/useStore";
import { NTDStore } from "../../../types/store";
import { NTDToasts } from "../../../types/toasts";
import { generateId } from "../../../utils";

export default function useToasts() {
  const [toasts, dispatch] = useToastsStore(({ toasts }) => toasts);

  function showToast(payload: NTDToasts.IToastPayload) {
    const uuid = generateId();
    dispatch((state: NTDStore.IToastsStore) => {
      state.toasts.push({
        timestampCreated: Date.now(),
        uuid: uuid,
        appearance: "solid",
        onCloseToastHandler: () => deleteToast(uuid),
        ...payload,
      });
      return state;
    });
  }

  function deleteToast(uuid: string) {
    dispatch((state: NTDStore.IToastsStore) => {
      const toastToDeleteIndex = state.toasts.findIndex(
        (el) => el?.uuid === uuid
      );
      state.toasts.splice(toastToDeleteIndex, 1);
      return state;
    });
  }

  return { toasts, showToast };
}
