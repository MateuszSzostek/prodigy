import React from "react";
//@ts-ignore
export default function useScript(src, options = {}) {
  const [status, setStatus] = React.useState(() => {
    if (!src) {
      return "idle";
    }

    return "loading";
  });

  const cachedScriptStatuses = React.useRef({});

  React.useEffect(() => {
    if (!src) {
      return;
    }
    //@ts-ignore
    const cachedScriptStatus = cachedScriptStatuses.current[src];
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus);
      return;
    }

    let script = document.querySelector(`script[src="${src}"]`);

    if (script) {
      setStatus(
        script.getAttribute("data-status") ?? cachedScriptStatus ?? "loading"
      );
    } else {
      script = document.createElement("script");
      //@ts-ignore
      script.src = src;
      //@ts-ignore
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);
      //@ts-ignore
      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === "load" ? "ready" : "error";

        if (script) {
          script.setAttribute("data-status", scriptStatus);
        }
      };

      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    }
    //@ts-ignore
    const setStateFromEvent = (event) => {
      const newStatus = event.type === "load" ? "ready" : "error";
      setStatus(newStatus);
      //@ts-ignore
      cachedScriptStatuses.current[src] = newStatus;
    };

    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
      //@ts-ignore
      if (script && options.removeOnUnmount) {
        script.remove();
      }
    };
    //@ts-ignore
  }, [src, options.removeOnUnmount]);

  return status;
}
