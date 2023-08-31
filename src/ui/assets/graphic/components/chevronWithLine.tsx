import React from "react";

export default function ChevronWithLineSVG({
  color = "#010002",
  customClass = "",
}: {
  color?: string;
  customClass?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-center-v ${customClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 20"
        width="16px"
        height="16px"
      >
        <title>_</title>
        <g>
          <path d="M7,18.5V5.5a.5.5,0,0,1,1,0v13a.5.5,0,0,1-1,0Zm10.5.5a.5.5,0,0,0,.35352-.85352L11.707,12l6.14649-6.14648a.5.5,0,0,0-.707-.707l-6.5,6.5a.49983.49983,0,0,0,0,.707l6.5,6.5A.49842.49842,0,0,0,17.5,19Z" />
        </g>
      </svg>
    </div>
  );
}
