import React, { Children, PropsWithChildren } from "react";
import { NTDSkeleton } from "../../../types/skeleton";
import Bone from "./Bone";
import useSkeleton from "./useSkeleton";

export default function Skeleton(
  props: PropsWithChildren<NTDSkeleton.ISkeleton>
) {
  const {
    /*
        roundClass,
        shadeClass,
        borderClass,
        bgColorClass,
        borderColorClass,
        sizeClass,
        */
  } = useSkeleton(props);

  return (
    <div className={`skeleton`}>
      {/*
        {props?.bones?.map((el, idx) => <Bone key={idx} {...el} baseUIClasses={`${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}${sizeClass}`}/>)}
        {props?.children}
    */}
    </div>
  );
}
