import React from "react";
import { NTDSkeleton } from "../../../../types/skeleton";
import useBone from "./useBone";

export default function Bone(props: NTDSkeleton.IBone) {
  const {
    /*
      type,
        randomWidth,
        animated,
        baseUIClasses
      */
  } = useBone(props);

  return <div className={`${props?.baseUIClasses} ${props?.extraClass}`} />;
}
