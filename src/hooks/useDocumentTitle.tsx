import React from "react";
//@ts-ignore
export default function useDocumentTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
