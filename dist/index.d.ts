/// <reference types="react" />
import React$1, { PropsWithChildren } from 'react';

declare function ProdigyProvider({ children }: PropsWithChildren<{}>): React$1.JSX.Element;

declare namespace NTDUI {
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

declare namespace NTDButton {
    interface IButton extends NTDUI.IUIElement, PropsWithChildren {
        size?: ButtonSizeType;
        bold?: boolean;
        appearance?: "solid" | "soft" | "simple";
        base?: React.HTMLProps<HTMLButtonElement>;
    }
    type ButtonAppearance = "solid" | "soft" | "simple";
    interface IButtonAppearanceData {
        bgColorClass: string;
        labelColorClass: string;
    }
    type ButtonSizeType = "xs" | "sm" | "md" | "lg";
    interface IButtonBorderColor {
        borderColorClass: string;
    }
    interface IButtonSize {
        sizeClass: string;
        labelSizeClass: string;
    }
    interface IButtonHook extends IButton {
    }
}

declare function Button(props: NTDButton.IButton): React$1.JSX.Element;

declare namespace NTDSlider {
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

declare function Slider(props: NTDSlider.ISlider): React$1.JSX.Element;

declare namespace NTDToasts {
    interface IToast extends IToastPayload {
        timestampCreated?: number;
    }
    interface IToastPayload {
        title: string;
        status: ToastStatusType;
        maxWidth?: string;
        maxHeight?: string;
        small?: boolean;
        bold?: boolean;
        appearance?: "solid" | "soft" | "simple";
        Body: JSX.Element;
    }
    interface IToastHook extends IToast {
    }
    type ToastStatusType = "ERROR" | "SUCCESS" | "WARNING" | "INFO" | "DEFAULT";
    const ToastStatus: {
        ERROR: string;
        SUCCESS: string;
        WARNING: string;
        INFO: string;
        DEFAULT: string;
    };
}

declare function useToasts(): {
    toasts: NTDToasts.IToast[];
    showToast: (payload: NTDToasts.IToastPayload) => void;
};

declare namespace NTDLightbox {
    interface ILightbox extends NTDUI.IUIElement, PropsWithChildren {
    }
    interface ILightboxPayload {
        payload: {
            id: string;
            Component: JSX.Element;
        };
    }
    interface ILightboxHook extends ILightbox {
    }
}

declare function useLightbox(): {
    showLightbox: ({ payload }: NTDLightbox.ILightboxPayload) => void;
    hideLightbox: (id: string) => void;
};

export { Button, ProdigyProvider, Slider, useLightbox, useToasts };
