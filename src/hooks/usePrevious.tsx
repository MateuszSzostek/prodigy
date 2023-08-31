import React from "react";
//@ts-ignore
export default function usePrevious(newValue) {
  const previousRef = React.useRef();

  React.useEffect(() => {
    previousRef.current = newValue;
  });

  return previousRef.current;
}
