import { useEffect, useState } from "react";
import { NTDSlider } from "../../../types/slider";
import useUIElementStyles from "../../hooks/useUIElementStyles";
import { NTDUI } from "../../../types/ui";
import Button from "../Button";
import ChevronSVG from "../../assets/graphic/components/chevron";

export default function useSlider(props: NTDSlider.ISliderHook) {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const { roundClass, shadeClass, borderClass }: NTDUI.IUIBaseClassStyles =
    useUIElementStyles(props);
  const { bgColorClass, labelColorClass }: NTDSlider.ISliderAppearanceData =
    getSliderAppearance(props?.appearance, props?.model);
  const { borderColorClass }: NTDSlider.ISliderBorderColor =
    getSliderBorderColor(props?.border, props?.model);

  useEffect(() => {}, [props.slide]);

  function nextSlide(): void {
    if (activeSlide === props?.items?.length - 1) setActiveSlide(0);
    else setActiveSlide((state) => state + 1);
  }

  function previousSlide(): void {
    if (activeSlide === 0) setActiveSlide(props?.items?.length - 1);
    else setActiveSlide((state) => state - 1);
  }

  function selectSlide(idx: number): void {
    setActiveSlide(idx);
  }

  function isOdd(value: number): boolean {
    return value % 2 === 1;
  }

  function isLimited(idx: number): boolean {
    // console.log("idx: " + idx);
    // @ts-ignore
    if (props?.pagination?.limit < 3) {
      console.warn("Slider pagination limit can't bee smaller than 3");
      // @ts-ignore
      return;
    }

    if (typeof props?.pagination?.limit !== "undefined") {
      let halfLimit = !isOdd(props?.pagination?.limit)
        ? Math.ceil(props.pagination.limit / 2)
        : Math.floor(props.pagination.limit / 2);
      console.log(isOdd(props?.pagination?.limit));
      const activeBorderSlider =
        activeSlide <= halfLimit
          ? halfLimit
          : activeSlide > props?.items?.length - 1 - halfLimit
          ? props?.items?.length - 1 - halfLimit
          : activeSlide;

      let borderRight = activeBorderSlider + halfLimit;
      let borderLeft =
        activeBorderSlider -
        halfLimit +
        (!isOdd(props?.pagination?.limit) ? 1 : 0);

      console.log("half " + halfLimit);
      console.log("activeSlide " + activeSlide);
      console.log("newActiveSlide " + activeBorderSlider);
      console.log("borderLeft " + borderLeft);
      console.log("borderRight " + borderRight);

      if (idx <= borderRight && idx >= borderLeft) return false;
      else return true;
    } else return false;
  }

  function renderPaginationButton(
    idx: number,
    type: NTDSlider.SliderPaginationAppearance
  ) {
    return (
      // @ts-ignore
      <li className="p-03">
        {
          // @ts-ignore
          typeof props.pagination.PaginationBtn !== "undefined" ? (
            // @ts-ignore
            <button
              onClick={() => selectSlide(idx)}
              className={`bg-transparent border-none hover-pointer ${
                typeof props?.pagination?.customClass !== "undefined"
                  ? props?.pagination?.customClass
                  : ""
              }`}
            >
              {
                // @ts-ignore
                props.pagination.PaginationBtn(
                  activeSlide,
                  idx,
                  props?.items?.length
                )
              }
            </button>
          ) : (
            // @ts-ignore
            <button
              onClick={() => selectSlide(idx)}
              className={`${getPaginationButtonStyle(type, idx)} 
  ${idx === activeSlide ? "bright" : ""}
  ${roundClass}${shadeClass}${borderClass}${borderColorClass}${bgColorClass} hover-pointer`}
            ></button>
          )
        }
      </li>
    );
  }

  function LeftArrow(vertical: boolean = false): JSX.Element {
    return (
      // @ts-ignore
      <Button
        extraClass={`${vertical === true ? "t-0" : "l-0"} absolute`}
        appearance="simple"
        base={{ onClick: previousSlide }}
      >
        {ChevronSVG({
          customClass: `${
            props?.vertical === true ? "rotate-z-270" : "reverse-x"
          }`,
        })}
      </Button>
    );
  }

  function RightArrow(vertical: boolean = false): JSX.Element {
    return (
      // @ts-ignore
      <Button
        extraClass={`${vertical === true ? "b-0" : "r-0"} absolute`}
        appearance="simple"
        base={{ onClick: nextSlide }}
      >
        {ChevronSVG({
          customClass: `${props?.vertical === true ? "rotate-z-90" : ""}`,
        })}
      </Button>
    );
  }

  function getPaginationButton(
    type: NTDSlider.SliderPaginationAppearance,
    idx: number
  ) {
    return isLimited(idx) === false && renderPaginationButton(idx, type);
  }

  function getPaginationButtonStyle(
    type: NTDSlider.SliderPaginationAppearance,
    idx: number
  ) {
    switch (type) {
      case "bars": {
        return `w-200 h-100 `;
      }
      case "squares": {
        return `w-200 h-200 `;
      }
      default: {
        return `w-100 h-100 round-05 `;
      }
    }
  }

  return {
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
    selectSlide,
    LeftArrow,
    RightArrow,
  };
}

function getSliderBorderColor(
  border: boolean | undefined,
  color: NTDUI.MetaColorType | undefined
): NTDSlider.ISliderBorderColor {
  return border === true
    ? { borderColorClass: ` border-${color ? color : "blue"}-05` }
    : { borderColorClass: "" };
}

function getSliderAppearance(
  appearance: NTDSlider.SliderAppearance = "solid",
  color: NTDUI.MetaColorType | undefined
): NTDSlider.ISliderAppearanceData {
  switch (appearance) {
    case "simple":
      return {
        bgColorClass: ` bg-transparent`,
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    case "soft":
      return {
        bgColorClass: color ? ` bg-${color}-10` : " bg-blue-10",
        labelColorClass: color ? ` color-${color}-05` : " color-blue-05",
      };
    default:
      return {
        bgColorClass: color ? ` bg-${color}-05` : " bg-blue-05",
        labelColorClass: color ? ` color-${color}-10` : " color-blue-10",
      };
  }
}
