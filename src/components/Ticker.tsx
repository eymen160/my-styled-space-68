import { ticker } from "../content/site";

/** One slow marquee line of the stack. Two copies side by side loop seamlessly at -50%. */
export default function Ticker() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {ticker.map((t) => (
        <li key={t} className="display flex items-center whitespace-nowrap px-6 text-[clamp(1.6rem,3.4vw,2.6rem)] italic text-ink-3 sm:px-10">
          {t}
          <span aria-hidden className="ml-12 text-[0.5em] not-italic text-accent sm:ml-20">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="group mt-28 overflow-hidden border-y hairline py-6 sm:mt-40" aria-label="Tech I work with">
      <div className="flex w-max [animation:ticker_48s_linear_infinite] group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
