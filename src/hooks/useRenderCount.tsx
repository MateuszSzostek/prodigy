import React from "react";

export default function useRenderCount() {
  const count = React.useRef(0);

  count.current++;

  return count.current;
}
