import { NTDToasts } from "../../../types/toasts";
export default function useToasts(): {
    toasts: NTDToasts.IToast[];
    showToast: (payload: NTDToasts.IToastPayload) => void;
};
