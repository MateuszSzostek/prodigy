import React from "react";
//@ts-ignore
export default function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = React.useState(value);
  const lastUpdated = React.useRef();

  React.useEffect(() => {
    const now = Date.now();

    //@ts-ignore
    if (now >= lastUpdated.current + interval) {
      //@ts-ignore
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        //@ts-ignore
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
}
