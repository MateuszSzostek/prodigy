import React from "react";
import { oldSchoolCopy } from "./hooksUtils";

export default function useCopyToClipboard() {
  const [state, setState] = React.useState(null);
  //@ts-ignore
  const copyToClipboard = React.useCallback((value) => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState(value);
        } else {
          throw new Error("writeText not supported");
        }
      } catch (e) {
        oldSchoolCopy(value);
        setState(value);
      }
    };

    handleCopy();
  }, []);

  return [state, copyToClipboard];
}
