import React from "react";
import { isMouseEvent, isTouchEvent } from "./hooksUtils";

export default function useLongPress(
  //@ts-ignore
  callback,
  {
    threshold = 400,
    onStart,
    onFinish,
    onCancel,
  }: {
    threshold?: number;
    onStart?: (event?: any) => void;
    onFinish?: (event?: any) => void;
    onCancel?: (event?: any) => void;
  } = {}
) {
  const isLongPressActive = React.useRef(false);
  const isPressed = React.useRef(false);
  const timerId = React.useRef();
  const cbRef = React.useRef(callback);

  React.useLayoutEffect(() => {
    cbRef.current = callback;
  });

  const start = React.useCallback(
    () => (event: { nativeEvent: any }) => {
      if (isPressed.current) return;

      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (onStart) {
        onStart(event);
      }

      isPressed.current = true;
      //@ts-ignore
      timerId.current = setTimeout(() => {
        cbRef.current(event);
        isLongPressActive.current = true;
      }, threshold);
    },
    [onStart, threshold]
  );

  const cancel = React.useCallback(
    () => (event: { nativeEvent: any }) => {
      if (!isMouseEvent(event) && !isTouchEvent(event)) return;

      if (isLongPressActive.current) {
        if (onFinish) {
          onFinish(event);
        }
      } else if (isPressed.current) {
        if (onCancel) {
          onCancel(event);
        }
      }

      isLongPressActive.current = false;
      isPressed.current = false;

      if (timerId.current) {
        window.clearTimeout(timerId.current);
      }
    },
    [onFinish, onCancel]
  );

  return React.useMemo(() => {
    if (callback === null) {
      return {};
    }

    const mouseHandlers = {
      onMouseDown: start(),
      onMouseUp: cancel(),
      onMouseLeave: cancel(),
    };

    const touchHandlers = {
      onTouchStart: start(),
      onTouchEnd: cancel(),
    };

    return {
      ...mouseHandlers,
      ...touchHandlers,
    };
  }, [callback, cancel, start]);
}
