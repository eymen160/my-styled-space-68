import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Expo-out: fast start, long soft landing. Used for every reveal on the site. */
export const ease = [0.16, 1, 0.3, 1] as const;

/** True on devices with a real mouse (no touch-only), and when motion is allowed. */
export function useFinePointer() {
  const reduced = useReducedMotion();
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine && !reduced;
}
