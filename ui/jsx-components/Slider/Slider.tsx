import React from "react";
import useSlider from "./useSlider";
import { NTDSlider } from "../../../types/slider";
import "./Slider.styles.css";

export default function Slider(props: NTDSlider.ISlider) {
  const {
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    activeSlide,
    nextSlide,
    previousSlide,
    getPaginationButtonStyle,
    getPaginationButton,
    LeftArrow,
    RightArrow,
  } = useSlider(props);

  console.log(props.items);

  return (
    <div className={`slider relative`} style={{ height: props.height }}>
      <ul
        className={`list-style-none m-0 p-0 w-full relative flex overflow-x-hidden overflow-y-hidden ${
          props?.vertical === true ? "flex-center-v" : "flex-center-h"
        }`}
        style={{ height: props.height }}
      >
        {props?.items.map((Slide, idx) => (
          <li
            className={` h-full absolute ${
              props?.swipeAnimation === "transition" && "trans-03"
            }`}
            key={idx}
            style={{
              transform: `translate${props?.vertical === true ? "Y" : "X"}(${
                (typeof props?.translateAmount !== "undefined"
                  ? props?.translateAmount
                  : 100) *
                (idx - activeSlide)
              }%)`,
              width:
                props?.vertical === true
                  ? "100%"
                  : `${
                      typeof props?.slideLenght !== "undefined"
                        ? props?.slideLenght
                        : 100
                    }%`,
              height:
                props?.vertical === true
                  ? `${
                      typeof props?.slideLenght !== "undefined"
                        ? props?.slideLenght
                        : 100
                    }%`
                  : "100%",
            }}
          >
            {typeof props.slide !== "undefined"
              ? props.slide(activeSlide, idx, props?.items.length, Slide)
              : Slide}
          </li>
        ))}
      </ul>
      <div
        className={`slider__arrows absolute w-full h-full t-0 flex ${
          props?.vertical === true ? "flex-center-h" : "flex-center-v"
        }`}
      >
        {props?.infinite === true ? (
          <>
            {LeftArrow(props?.vertical)}
            {RightArrow(props?.vertical)}
          </>
        ) : (
          activeSlide !== 0 && LeftArrow(props?.vertical)
        )}
        {activeSlide !== props?.items?.length - 1 &&
          RightArrow(props?.vertical)}
      </div>
      <ul
        className={`slider__pagination absolute b--300 w-full list-style-none m-0 p-0 flex flex-bottom-v flex-center-h`}
      >
        {props?.items?.map((btn, idx) =>
          getPaginationButton(props?.pagination?.appearance, idx)
        )}
      </ul>
    </div>
  );
}
