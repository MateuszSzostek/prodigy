import { NTDUI } from "../../types/ui";

export default function useUIElementStyles({
  round,
  shade,
  border,
}: NTDUI.IUIElementStyles): NTDUI.IUIBaseClassStyles {
  const roundClass = round ? " round-0375" : "";
  const shadeClass = shade ? " shade" : "";
  const borderClass = border ? " border-00625 border-solid" : " border-none";

  return { roundClass, shadeClass, borderClass };
}
