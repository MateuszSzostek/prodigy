import React from "react";
import { isShallowEqual } from "./hooksUtils";

export default function useNetworkState() {
  const connection =
    //@ts-ignore
    navigator?.connection ||
    //@ts-ignore
    navigator?.mozConnection ||
    //@ts-ignore
    navigator?.webkitConnection;

  const cache = React.useRef({});
  //@ts-ignore
  const subscribe = React.useCallback((callback) => {
    window.addEventListener("online", callback, { passive: true });
    window.addEventListener("offline", callback, { passive: true });

    if (connection) {
      connection.addEventListener("change", callback, { passive: true });
    }

    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);

      if (connection) {
        connection.removeEventListener("change", callback);
      }
    };
  }, []);

  const getSnapshot = () => {
    const online = navigator.onLine;

    const nextState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    } else {
      cache.current = nextState;
      return nextState;
    }
  };

  const getServerSnapshot = () => {
    throw Error("useNetworkState is a client-only hook");
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
