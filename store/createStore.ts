import { useState, useMemo } from "react";
import { NTDStore } from "../types/store";

class EventEmitter extends EventTarget {
  emit(key: string) {
    this.dispatchEvent(new Event(key));
  }
}

export function createStore(storeState: NTDStore.IStore) {
  const instance = new EventEmitter();

  function useStore<T>(
    stateSelector?: (selectorState: NTDStore.IStore) => T
  ): [
    T,
    (reducer: (reducerState: NTDStore.IStore) => NTDStore.IStore) => void
  ] {
    const [count, setCount] = useState(0);

    function dispatch(
      reducer: (reducerState: NTDStore.IStore) => NTDStore.IStore
    ) {
      storeState = reducer(storeState);
      instance.emit("store-update");
    }

    useMemo(() => {
      instance.addEventListener("store-update", () => {
        setCount((c) => c + 0.00000001);
      });
    }, []);

    const state = stateSelector(storeState);

    return [state, dispatch];
  }
  return { useStore };
}
