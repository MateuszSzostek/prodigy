import React from "react";

export default function useMeasure() {
  const ref = React.useRef(null);
  const [rect, setRect] = React.useState({
    width: null,
    height: null,
  });

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    //@ts-ignore
    const observer = new ResizeObserver(([entry]) => {
      if (entry && entry.contentRect) {
        setRect({
          //@ts-ignore
          width: entry.contentRect.width,
          //@ts-ignore
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, rect];
}
