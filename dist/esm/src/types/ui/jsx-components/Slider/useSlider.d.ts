/// <reference types="react" />
import { NTDSlider } from "../../../types/slider";
export default function useSlider(props: NTDSlider.ISliderHook): {
    roundClass: string;
    shadeClass: string;
    borderClass: string;
    bgColorClass: string;
    labelColorClass: string;
    borderColorClass: string;
    activeSlide: number;
    nextSlide: () => void;
    previousSlide: () => void;
    getPaginationButtonStyle: (type: NTDSlider.SliderPaginationAppearance, idx: number) => "w-200 h-100 " | "w-200 h-200 " | "w-100 h-100 round-05 ";
    getPaginationButton: (type: NTDSlider.SliderPaginationAppearance, idx: number) => false | import("react").JSX.Element;
    selectSlide: (idx: number) => void;
    LeftArrow: (vertical?: boolean) => JSX.Element;
    RightArrow: (vertical?: boolean) => JSX.Element;
};
