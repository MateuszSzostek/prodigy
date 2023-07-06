import { NTDStore } from "../types/store";
declare const useCounterStore: <T>(stateSelector: (selectorState: NTDStore.ICounterStore) => T) => [T, (reducer: (reducerState: NTDStore.ICounterStore) => NTDStore.ICounterStore) => void];
declare const useToastsStore: <T>(stateSelector: (selectorState: NTDStore.IToastsStore) => T) => [T, (reducer: (reducerState: NTDStore.IToastsStore) => NTDStore.IToastsStore) => void];
declare const useLightboxStore: <T>(stateSelector: (selectorState: NTDStore.ILightboxStore) => T) => [T, (reducer: (reducerState: NTDStore.ILightboxStore) => NTDStore.ILightboxStore) => void];
export { useCounterStore, useToastsStore, useLightboxStore };
