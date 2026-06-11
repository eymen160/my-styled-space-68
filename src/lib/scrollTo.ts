import type Lenis from "lenis";

declare global {
  interface Window { __lenis?: Lenis }
}

/** Scroll to an element id (or top with `null`), respecting the Lenis instance when present. */
export function smoothScrollTo(id: string | null, offset = -72) {
  if (id === null) {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "smooth" });
}
