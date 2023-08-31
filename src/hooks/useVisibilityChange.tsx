import React from "react";

export default function useVisibilityChange() {
  const [documentVisible, setDocumentVisibility] = React.useState(true);

  React.useEffect(() => {
    const handleChange = () => {
      if (document.visibilityState !== "visible") {
        setDocumentVisibility(false);
      } else {
        setDocumentVisibility(true);
      }
    };
    handleChange();

    document.addEventListener("visibilitychange", handleChange);

    return () => {
      document.removeEventListener("visibilitychange", handleChange);
    };
  }, []);

  return documentVisible;
}
