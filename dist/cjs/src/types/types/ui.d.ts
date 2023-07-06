export declare namespace NTDUI {
    interface IUIElement {
        round?: boolean;
        model?: MetaColorType;
        shade?: boolean;
        border?: boolean;
        extraClass?: string;
    }
    interface IUIBaseClassStyles {
        roundClass: string;
        shadeClass: string;
        borderClass: string;
    }
    interface IUIElementStyles extends IUIElement {
    }
    interface IMetaColors {
        [key: string]: string;
    }
    type MetaColorType = "red" | "green" | "blue" | "orange" | "gray";
    const MetaColors: IMetaColors;
}
