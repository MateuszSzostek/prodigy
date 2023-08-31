import React from "react";
//@ts-ignore
export default function useDefault(initialValue, defaultValue) {
  const [state, setState] = React.useState(initialValue);

  if (typeof state === "undefined" || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}
