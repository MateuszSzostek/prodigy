import { useState, useMemo } from "react";

export function createStore<F>(storeState: F) {
  const instance = new EventTarget();

  function useStore<T>(
    stateSelector: (selectorState: F) => T
  ): [T, (reducer: (reducerState: F) => F) => void] {
    const [, setCount] = useState(0);

    function dispatch(reducer: (reducerState: F) => F) {
      storeState = reducer(storeState);
      instance.dispatchEvent(new Event("store-update"));
    }

    useMemo(() => {
      instance.addEventListener("store-update", () => {
        setCount((c) => c + 0.00000001);
      });
    }, []);

    //@ts-ignore
    const state = stateSelector(storeState);

    return [state, dispatch];
  }
  return [useStore];
}
