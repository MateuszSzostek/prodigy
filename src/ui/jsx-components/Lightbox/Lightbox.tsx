import React from "react";
import useLightbox from "./useLigthbox";
import { NTDLightbox } from "../../../types/lightbox";
import { useLightboxStore } from "../../../store/useStore";

export function Lightbox(props: NTDLightbox.ILightbox) {
  const [lightbox, dispatch] = useLightboxStore((lightbox) => lightbox);

  const { content, isActive } = lightbox;

  const {} = useLightbox();

  return (
    <div
      className={`fixed w-full h-full bg-gray-02 trans-03 t-0 l-0 flex flex-center-h flex-center-v bg-gray-05-rgba-00 ${
        isActive === true ? "visible opacity-1" : "hidden opacity-0"
      }`}
    >
      {content.map(({ id, Component }) => (
        <div key={id}>{Component}</div>
      ))}
    </div>
  );
}
