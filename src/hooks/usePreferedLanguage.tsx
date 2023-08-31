import React from "react";
import usePreferredLanguageSubscribe from "./usePreferedLanguageSubscribe";
import {
  getPreferredLanguageServerSnapshot,
  getPreferredLanguageSnapshot,
} from "./hooksUtils";

export default function usePreferredLanguage() {
  return React.useSyncExternalStore(
    usePreferredLanguageSubscribe,
    getPreferredLanguageSnapshot,
    getPreferredLanguageServerSnapshot
  );
}
