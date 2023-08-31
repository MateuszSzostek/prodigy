import React from "react";

export default function useRenderInfo(name = "Unknown") {
  const count = React.useRef(0);
  const lastRender = React.useRef();
  const now = Date.now();

  count.current++;

  React.useEffect(() => {
    //@ts-ignore
    lastRender.current = Date.now();
  });

  const sinceLastRender = lastRender.current ? now - lastRender.current : 0;

  if (process.env.NODE_ENV !== "production") {
    const info = {
      name,
      renders: count.current,
      sinceLastRender,
      timestamp: now,
    };

    return info;
  }
}
