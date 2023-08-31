import React from "react";
import { NTDSkeleton } from "../../../../types/skeleton";
import { getRandomIntFromInterval } from "../../../../utils";

export default function useBone(props: NTDSkeleton.IBoneHook) {
  const [boneWidth, setBoneWidth] = React.useState(100);
  const {boneClass} = getBoneType(props?.type)
  const animationClass = getBoneAnimationClass(props?.animated);

  React.useEffect(() => {
    if(props?.randomWidth === true) {
      const interval = setInterval(() => {
        setBoneWidth(getRandomIntFromInterval(10,100))
      },1000);

      return () => clearInterval(interval)
    }
  }, [])

  return { animationClass, boneClass, boneWidth };
}


function getBoneAnimationClass(animated: boolean = true) {
  return animated === true ? " pulse-color-anim" : "";
}

function getBoneType(
  type: NTDSkeleton.BoneType = "bone"
): NTDSkeleton.BoneClassType {
  switch (type) {
    case "skull":
      return {
        boneClass: ` round-full aspect-1-1`,
      };
    default:
      return {
        boneClass: " w-full",
      };
  }
}
