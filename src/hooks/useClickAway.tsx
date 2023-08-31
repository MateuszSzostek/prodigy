import React from "react";
//@ts-ignore
export default function useClickAway(cb) {
  const ref = React.useRef(null);
  const refCb = React.useRef(cb);

  React.useLayoutEffect(() => {
    refCb.current = cb;
  });

  React.useEffect(() => {
    //@ts-ignore
    const handler = (e) => {
      const element = ref.current;
      //@ts-ignore
      if (element && !element.contains(e.target)) {
        refCb.current(e);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return ref;
}
