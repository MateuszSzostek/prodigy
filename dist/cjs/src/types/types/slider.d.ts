import { NTDUI } from "./ui";
import { PropsWithChildren } from "react";
export declare namespace NTDSlider {
    interface ISlider extends NTDUI.IUIElement, PropsWithChildren {
        height: string;
        items: JSX.Element[];
        bold?: boolean;
        appearance?: SliderAppearance;
        slide?: (currentIdx: number, slideIdx: number, totalAmount: number, Slide: JSX.Element) => JSX.Element;
        infinite?: boolean;
        vertical?: boolean;
        slideLenght?: number;
        translateAmount?: number;
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
            PaginationBtn?: (currentIdx: number, btnIdx: number, totalAmount: number) => JSX.Element;
        };
        arrows?: {
            appearance?: SliderArrowsAppearance;
            previousBtn?: (currentIdx: number, btnIdx: number, totalAmount: number) => JSX.Element;
            nextBtn?: (currentIdx: number, btnIdx: number, totalAmount: number) => JSX.Element;
            customClass?: string;
        };
    }
    type SliderAppearance = "solid" | "soft" | "simple";
    type SliderPaginationAppearance = "dots" | "bars" | "squares";
    type SliderArrowsAppearance = "simple" | "area";
    interface ISliderAppearanceData {
        bgColorClass: string;
        labelColorClass: string;
    }
    interface ISliderBorderColor {
        borderColorClass: string;
    }
    interface ISliderSize {
        sizeClass: string;
        labelSizeClass: string;
    }
    interface ISliderHook extends ISlider {
    }
}
