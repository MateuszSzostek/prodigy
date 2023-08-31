import React from "react";
//@ts-ignore
export default function usePreferredLanguageSubscribe(cb) {
  window.addEventListener("languagechange", cb);
  return () => window.removeEventListener("languagechange", cb);
}
