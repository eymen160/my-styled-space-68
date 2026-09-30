import { motion, useReducedMotion } from "framer-motion";
import { metrics, profile } from "../content/site";
import { ease } from "../lib/motion";
import MaskLines from "./motion/MaskLines";
import RollingNumber from "./motion/RollingNumber";
import Scribble from "./motion/Scribble";
import ResumeSheet from "./ResumeSheet";

export default function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <motion.p className="label mb-7 flex items-center gap-3" {...fade(0.05)}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Eymen Faruk Keyvan · CS @ Kennesaw State
          </motion.p>

          <h1 className="display text-[clamp(3rem,8.4vw,7.4rem)] font-[380] leading-[0.94]" style={{ fontVariationSettings: '"SOFT" 30' }}>
            <MaskLines
              delay={0.15}
              lines={[
                "I build software",
                "that ships to",
                <span key="p" className="relative inline-block italic text-accent" style={{ fontVariationSettings: '"SOFT" 100' }}>
                  production.
                  <Scribble delay={1.05} />
                </span>,
              ]}
            />
          </h1>

          <motion.p className="mt-9 max-w-[36rem] text-[1.075rem] leading-relaxed text-ink-2" {...fade(0.6)}>
            {profile.summary}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3" {...fade(0.75)}>
            <span className="rounded-full border hairline px-4 py-2 text-sm">
              Seeking a <strong className="font-semibold">{profile.seeking}</strong>
            </span>
            <span className="text-sm text-ink-3">{profile.relocation}</span>
          </motion.div>
        </div>

        <ResumeSheet delay={0.45} />
      </div>

      {/* proof metrics */}
      <div className="wrap mt-20 sm:mt-28">
        <dl className="grid grid-cols-2 border-t hairline lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`border-b hairline py-7 pr-4 lg:border-b-0 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${i > 0 ? "lg:border-l lg:pl-6" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease }}
            >
              <dt className="label mb-3">{m.source}</dt>
              <dd>
                <RollingNumber value={m.value} className="display text-[clamp(2.3rem,4.6vw,3.6rem)] font-[420] text-accent" />
                <p className="mt-3 max-w-[15rem] text-sm leading-snug text-ink-2">{m.label}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
