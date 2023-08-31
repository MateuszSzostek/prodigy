import React, { useRef, useCallback, useEffect } from "react";
//@ts-ignore
export default function useOutsideClick(ref, handler, when = true) {
  const savedHandler = useRef(handler);
  //@ts-ignore
  const memoizedCallback = useCallback((e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      savedHandler.current(e);
    }
  }, []);
  useEffect(() => {
    savedHandler.current = handler;
  });
  useEffect(() => {
    if (when) {
      document.addEventListener("click", memoizedCallback);
      document.addEventListener("ontouchstart", memoizedCallback);
      return () => {
        document.removeEventListener("click", memoizedCallback);
        document.removeEventListener("ontouchstart", memoizedCallback);
      };
    }
  }, [ref, handler, when]);
}
