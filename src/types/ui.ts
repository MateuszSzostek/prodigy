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
    [key: string]: string;
  }

  export type MetaColorType = "red" | "green" | "blue" | "orange" | "gray";

  export const MetaColors: IMetaColors = {
    red: "red",
    green: "green",
    blue: "blue",
    orange: "orange",
    gray: "gray",
  };
}
