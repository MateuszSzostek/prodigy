import { NTDUI } from "./ui";
import {
  ButtonHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
  SVGProps,
} from "react";
export namespace NTDIcon {
  export interface IIcon extends NTDUI.IUIElement, PropsWithChildren {
    Image?: FunctionComponent<SVGProps<SVGSVGElement>>;
    width?: string;
    height?: string;
    base?: React.DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLOrSVGImageElement>,
      HTMLOrSVGImageElement
    >;
  }

  export interface IIconHook extends IIcon {}
}
