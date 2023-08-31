import React from "react";
//@ts-ignore
export default function useFavicon(url) {
  React.useEffect(() => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    //@ts-ignore
    link.type = "image/x-icon";
    //@ts-ignore
    link.rel = "shortcut icon";
    //@ts-ignore
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, [url]);
}
