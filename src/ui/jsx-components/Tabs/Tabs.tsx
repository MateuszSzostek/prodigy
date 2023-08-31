import React, { useCallback, useState } from "react";
import { NTDTabs } from "../../../types/tabs";

export default function Tabs(props: NTDTabs.ITabs) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleSetActiveTab = useCallback(
    function (index: number) {
      setActiveTab(index);
    },
    [activeTab]
  );

  return (
    <div className="tabs__container">
      <ul className="list-style-none flex p-0">
        {props?.items?.map((Tab, idx) => (
          <li
            onClick={() => handleSetActiveTab(idx)}
            className={`mx-03 hover-pointer ${
              props?.animation === "transition" && "trans-03"
            } ${activeTab === idx ? "border-bottom-1" : ""}`}
            key={idx}
          >
            {typeof props.tab !== "undefined"
              ? //@ts-ignore
                props.tab(activeTab, idx, props?.items.length, Tab)
              : Tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
