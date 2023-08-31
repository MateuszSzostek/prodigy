import React from "react";

export default function useMouse() {
  const [state, setState] = React.useState({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    //@ts-ignore
    const handleMouseMove = (event) => {
      let newState = {
        x: event.pageX,
        y: event.pageY,
      };
      //@ts-ignore
      if (ref.current instanceof HTMLElement) {
        //@ts-ignore
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.pageXOffset;
        const elementPositionY = top + window.pageYOffset;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        //@ts-ignore
        newState.elementX = elementX;
        //@ts-ignore
        newState.elementY = elementY;
        //@ts-ignore
        newState.elementX = elementX;
        //@ts-ignore
        newState.elementY = elementY;
        //@ts-ignore
        newState.elementPositionX = elementPositionX;
        //@ts-ignore
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [state, ref];
}
