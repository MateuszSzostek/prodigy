import { NTDLightbox } from "../../../types/lightbox";
import { useLightboxStore } from "../../../store/useStore";
import { NTDStore } from "../../../types/store";

export default function useLightbox() {
  const [lightbox, dispatch] = useLightboxStore((lightbox) => lightbox);

  function showLightbox({ payload }: NTDLightbox.ILightboxPayload): void {
    console.log(payload);
    dispatch((state: NTDStore.ILightboxStore) => {
      state.content.push(payload);
      state.isActive = true;
      return state;
    });
  }

  function hideLightbox(id: string): void {
    dispatch((state: NTDStore.ILightboxStore) => {
      state.content = state.content.filter((el) => el.id !== id);
      if (state.content?.length <= 0) state.isActive = false;
      return state;
    });
  }

  return { showLightbox, hideLightbox };
}
