import { NTDUI } from "./ui";
import { ButtonHTMLAttributes, FunctionComponent, PropsWithChildren, SVGProps } from "react";
export declare namespace NTDIcon {
    interface IIcon extends NTDUI.IUIElement, PropsWithChildren {
        Image?: FunctionComponent<SVGProps<SVGSVGElement>>;
        width?: string;
        height?: string;
        base?: React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement>;
    }
    interface IIconHook extends IIcon {
    }
}
