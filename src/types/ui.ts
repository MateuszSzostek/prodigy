export namespace NTDUI {
  export interface IUIElement {
    round?: boolean;
    model?: MetaColorType;
    shade?: boolean;
    border?: boolean;
    extraClass?: string;
  }

  export interface IUIBaseClassStyles {
    roundClass: string;
    shadeClass: string;
    borderClass: string;
  }

  export interface IUIElementStyles extends IUIElement {}

  export interface IMetaColors {
    [key: string]: MetaColorType;
  }

  export interface IMetaSizes {
    [key: string]: MetaSizeType;
  }

  export interface IMetaAppearances {
    [key: string]: MetaAppearanceType;
  }

  export type MetaColorType = "red" | "green" | "blue" | "orange" | "gray";
  export type MetaSizeType = "xs" | "sm" | "md" | "lg";
  export type MetaAppearanceType = "solid" | "soft" | "simple";

  export const MetaColors: IMetaColors = {
    red: "red",
    green: "green",
    blue: "blue",
    orange: "orange",
    gray: "gray",
  };

  export const MetaSizes: NTDUI.IMetaSizes = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  };

  export const MetaAppearances: NTDUI.IMetaAppearances = {
    solid: "solid",
    soft: "soft",
    simple: "simple",
  };
}
