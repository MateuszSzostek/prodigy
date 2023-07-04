import React from "react";

export default function ChevronSVG({
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
        viewBox="0 0 20 20"
        id="chevron"
        width="16px"
        height="16px"
      >
        <path
          style={{ fill: color }}
          d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"
        ></path>
      </svg>
    </div>
  );
}
