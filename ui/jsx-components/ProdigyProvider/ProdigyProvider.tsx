import React, { PropsWithChildren } from "react";
import IProdigyProvider from "./ProdigyProvider.types";
import Toasts from "../Toasts";
import "../../../ui/animations/index.css";
import "../../../ui/styles/global.css";
import "../../../ui/styles/variables.css";
import "../../../ui/styles/layout.css";
import "../../../ui/styles/utils.css";
import "../../../ui/styles/temp.css";

export default function ProdigyProvider({
  children,
}: PropsWithChildren<IProdigyProvider>) {
  return (
    <>
      {children}
      <Toasts />
    </>
  );
}
