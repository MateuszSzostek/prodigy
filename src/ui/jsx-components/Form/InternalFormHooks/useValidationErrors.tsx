import React, { useEffect, useState } from "react";

export default function useValidationErrors(id: string) {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener(
      `onvalidationerrorsvaluechangehandler-${id}`,
      onValidationErrorsValueChangeHandler
    );
    return () => {
      window.removeEventListener(
        `onvalidationerrorsvaluechangehandler-${id}`,
        onValidationErrorsValueChangeHandler
      );
    };
  }, [id]);
  //@ts-ignore
  function onValidationErrorsValueChangeHandler(e) {
    setValidationErrors(e?.detail?.extra?.validationErrors);
  }

  return { validationErrors };
}
