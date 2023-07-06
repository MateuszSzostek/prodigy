import { NTDLightbox } from "../../../types/lightbox";
export default function useLightbox(): {
    showLightbox: ({ payload }: NTDLightbox.ILightboxPayload) => void;
    hideLightbox: (id: string) => void;
};
