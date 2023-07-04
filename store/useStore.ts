import { NTDStore } from "../types/store";
import { createStore } from "./createStore";

const [useCounterStore] = createStore<NTDStore.ICounterStore>({
  counter: 9,
});

const [useToastsStore] = createStore<NTDStore.IToastsStore>({
  toasts: [],
});

const [useLightboxStore] = createStore<NTDStore.ILightboxStore>({
  isActive: false,
  content: [],
});

export { useCounterStore, useToastsStore, useLightboxStore };
