/// <reference types="react" />
import { NTDText } from "../../../types/text";
export default function useText(props: NTDText.ITextHook): {
    Tag: keyof JSX.IntrinsicElements;
    roundClass: string;
    shadeClass: string;
    borderClass: string;
    textWeightClass: string;
    borderColorClass: string;
    colorClass: string;
};
