import React from "react";

export default function useIntersectionObserver(
  options: { threshold?: number; root?: any; rootMargin?: string } = {}
) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;
  const ref = React.useRef(null);
  const [entry, setEntry] = React.useState(null);

  React.useEffect(() => {
    const node = ref?.current;

    if (!node || typeof IntersectionObserver !== "function") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        //@ts-ignore
        setEntry(entry);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      setEntry(null);
      observer.disconnect();
    };
  }, [threshold, root, rootMargin]);

  return [ref, entry];
}
