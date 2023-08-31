import React from "react";

export default function useWindowSize() {
  const [size, setSize] = React.useState({
    width: null,
    height: null,
  });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        //@ts-ignore
        width: window.innerWidth,
        //@ts-ignore
        height: window.innerHeight,
      });
    };

    handleResize();
    //@ts-ignore
    window.addEventListener("resize", handleResize);

    return () => {
      //@ts-ignore
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
