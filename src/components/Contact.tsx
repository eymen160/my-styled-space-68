import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "../content/site";
import { ease } from "../lib/motion";
import SpinBadge from "./SpinBadge";

/** Closing cover: the page rises into cobalt and the headline scales up as you arrive. */
export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 20%"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.82, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [48, 0]);

  return (
    <section id="contact" ref={ref} className="mt-32 sm:mt-44">
      <motion.div className="origin-top overflow-hidden" style={{ scale, borderTopLeftRadius: radius, borderTopRightRadius: radius, background: "var(--cobalt)", color: "var(--paper)" }}>
        <div className="wrap relative pb-16 pt-24 sm:pb-20 sm:pt-32">
          <p className="label" style={{ color: "var(--sun)" }}>
            04 — Contact
          </p>
          <h2 className="display mt-6 text-[clamp(3.2rem,11vw,10rem)] font-[800] uppercase leading-[0.85] tracking-[-0.04em]" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
            <motion.span
              className="block"
              initial={reduced ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
            >
              Let's build
            </motion.span>
            <motion.span
              className="block italic"
              style={{ color: "var(--sun)" }}
              initial={reduced ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease }}
            >
              something.
            </motion.span>
          </h2>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <a href={`mailto:${profile.email}`} className="under break-all font-mono text-[clamp(1.05rem,2.6vw,1.9rem)]">
                {profile.email}
              </a>
              <p className="mt-5 max-w-lg leading-relaxed opacity-80">
                Looking for a {profile.seeking}. Based in {profile.location} — {profile.relocation}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.resume} target="_blank" rel="noopener" className="pill" style={{ background: "var(--sun)", color: "var(--ink)" }}>
                  Download resume ↓
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener" className="pill border border-white/40">
                  LinkedIn ↗
                </a>
                <a href={profile.github} target="_blank" rel="noopener" className="pill border border-white/40">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <SpinBadge href={profile.resume} text="Hire me · Summer 2027 · Resume · " dark />
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm opacity-70 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p>Built with React, Vite &amp; a lot of scrolling.</p>
          </footer>
        </div>
      </motion.div>
    </section>
  );
}
