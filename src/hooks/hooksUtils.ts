import React from "react";

export function isTouchEvent({ nativeEvent }: { nativeEvent: any }) {
  return window.TouchEvent
    ? nativeEvent instanceof TouchEvent
    : "touches" in nativeEvent;
}

export function isShallowEqual(object1: Object, object2: Object) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    //@ts-ignore
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

export function isMouseEvent(event: { nativeEvent: any }) {
  return event.nativeEvent instanceof MouseEvent;
}
//@ts-ignore
export function throttle(cb, ms) {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
}
//@ts-ignore
export function oldSchoolCopy(text) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

export const initialUseHistoryStateState = {
  past: [],
  present: null,
  future: [],
};
//@ts-ignore
export const useHistoryStateReducer = (state, action) => {
  const { past, present, future } = state;
  switch (action.type) {
    case "UNDO":
      return {
        past: past.slice(0, past.length - 1),
        present: past[past.length - 1],
        future: [present, ...future],
      };
    case "REDO":
      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
    case "SET":
      const { newPresent } = action;

      if (action.newPresent === present) {
        return state;
      }

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    case "CLEAR":
      return {
        ...initialUseHistoryStateState,
        present: action.initialPresent,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

export const getPreferredLanguageSnapshot = () => {
  return navigator.language;
};

export const getPreferredLanguageServerSnapshot = () => {
  throw Error("usePreferredLanguage is a client-only hook");
};
