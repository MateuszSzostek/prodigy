import { NTDButton } from "../../../types/button";
export default function useButton(props: NTDButton.IButtonHook): {
    roundClass: string;
    shadeClass: string;
    borderClass: string;
    bgColorClass: string;
    labelColorClass: string;
    borderColorClass: string;
    sizeClass: string;
    labelSizeClass: string;
};
