import React from "react";
import {
  useHistoryStateReducer,
  initialUseHistoryStateState,
} from "./hooksUtils";

export default function useHistoryState(initialPresent = {}) {
  const initialPresentRef = React.useRef(initialPresent);

  const [state, dispatch] = React.useReducer(useHistoryStateReducer, {
    ...initialUseHistoryStateState,
    present: initialPresentRef.current,
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = React.useCallback(() => {
    if (canUndo) {
      dispatch({ type: "UNDO" });
    }
  }, [canUndo]);

  const redo = React.useCallback(() => {
    if (canRedo) {
      dispatch({ type: "REDO" });
    }
  }, [canRedo]);

  const set = React.useCallback(
    //@ts-ignore
    (newPresent) => dispatch({ type: "SET", newPresent }),
    []
  );

  const clear = React.useCallback(
    () =>
      dispatch({ type: "CLEAR", initialPresent: initialPresentRef.current }),
    []
  );

  return { state: state.present, set, undo, redo, clear, canUndo, canRedo };
}
