import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export namespace NTDSlider {
  export interface ISlider extends NTDUI.IUIElement, PropsWithChildren {
    height: string;
    items: JSX.Element[];
    bold?: boolean;
    appearance?: SliderAppearance;
    slide?: (
      currentIdx: number,
      slideIdx: number,
      totalAmount: number,
      Slide: JSX.Element
    ) => JSX.Element;
    infinite?: boolean;
    vertical?: boolean;
    slideLenght?: number; // 0 - 100
    translateAmount?: number; // 0 - 100
    touchable?: boolean;
    swipable?: boolean;
    swipeAnimation?: "fade" | "transition" | "none";
    hasteAnimation?: string;
    autoplay?: boolean;
    autoplayInterval?: number;
    keyboardControl?: boolean;
    mouseWheelControl?: boolean;
    pagination?: {
      limit?: number;
      appearance?: SliderPaginationAppearance;
      customClass?: string;
      PaginationBtn?: (
        currentIdx: number,
        btnIdx: number,
        totalAmount: number
      ) => JSX.Element;
    };
    arrows?: {
      appearance?: SliderArrowsAppearance;
      previousBtn?: (
        currentIdx: number,
        btnIdx: number,
        totalAmount: number
      ) => JSX.Element;
      nextBtn?: (
        currentIdx: number,
        btnIdx: number,
        totalAmount: number
      ) => JSX.Element;
      customClass?: string;
    };
  }

  export type SliderAppearance = "solid" | "soft" | "simple";

  export type SliderPaginationAppearance = "dots" | "bars" | "squares";

  export type SliderArrowsAppearance = "simple" | "area";

  export interface ISliderAppearanceData {
    bgColorClass: string;
    labelColorClass: string;
  }

  export interface ISliderBorderColor {
    borderColorClass: string;
  }

  export interface ISliderSize {
    sizeClass: string;
    labelSizeClass: string;
  }

  export interface ISliderHook extends ISlider {}
}
