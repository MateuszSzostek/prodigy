import React from "react";

export default function useHover() {
  const [hovering, setHovering] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const handleMouseEnter = () => {
      setHovering(true);
    };

    const handleMouseLeave = () => {
      setHovering(false);
    };
    //@ts-ignore
    node.addEventListener("mouseenter", handleMouseEnter);
    //@ts-ignore
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      //@ts-ignore
      node.removeEventListener("mouseenter", handleMouseEnter);
      //@ts-ignore
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [ref, hovering];
}
