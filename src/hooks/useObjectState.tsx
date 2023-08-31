import React from "react";
//@ts-ignore
export default function useObjectState(initialValue) {
  const [state, setState] = React.useState(initialValue);
  //@ts-ignore
  const handleUpdate = React.useCallback((arg) => {
    if (typeof arg === "function") {
      //@ts-ignore
      setState((s) => {
        const newState = arg(s);

        return {
          ...s,
          ...newState,
        };
      });
    }

    if (typeof arg === "object") {
      //@ts-ignore
      setState((s) => ({
        ...s,
        ...arg,
      }));
    }
  }, []);

  return [state, handleUpdate];
}
