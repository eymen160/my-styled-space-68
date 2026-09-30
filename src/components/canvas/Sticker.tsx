import { useRef, useState, type ReactNode, type RefObject } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ease } from "../../lib/motion";

export type StickerPos = {
  /** desktop position, % of the canvas */
  x: number;
  y: number;
  /** mobile position; omit to hide the sticker on small screens */
  mx?: number;
  my?: number;
  rotate: number;
  /** parallax depth: how fast it drifts up as you scroll away (0 = pinned) */
  depth: number;
};

type Props = {
  name: string;
  pos: StickerPos;
  index: number;
  canvasRef: RefObject<HTMLElement>;
  z: number;
  onFront: () => void;
  href?: string;
  cursorLabel?: string;
  children: ReactNode;
};

/**
 * A draggable item on the hero canvas. Throw it and it glides with momentum; while held it shows a
 * Figma-style selection frame with handles and the layer name. Optional href opens on a click
 * that wasn't a drag.
 */
export default function Sticker({ name, pos, index, canvasRef, z, onFront, href, cursorLabel = "Drag me", children }: Props) {
  const reduced = useReducedMotion();
  const dragged = useRef(false);
  const [active, setActive] = useState(false);

  const { scrollY } = useScroll();
  const drift: MotionValue<number> = useTransform(scrollY, [0, 900], [0, reduced ? 0 : -pos.depth * 260]);

  const style = {
    "--x": `${pos.x}%`,
    "--y": `${pos.y}%`,
    "--mx": `${pos.mx ?? 0}%`,
    "--my": `${pos.my ?? 0}%`,
    zIndex: z,
  } as React.CSSProperties;

  const open = () => {
    if (href && !dragged.current) window.open(href, "_blank", "noopener");
  };

  return (
    <motion.div className={`sticker-pos absolute ${pos.mx === undefined ? "hidden md:block" : ""}`} style={{ ...style, y: drift }}>
      {/* stickers shrink on phones; kept off the motion element so it doesn't fight framer's transform */}
      <div className="origin-top-left scale-[0.62] md:scale-100">
        <motion.div
          role={href ? "link" : undefined}
          tabIndex={href ? 0 : -1}
          aria-label={href ? `${name} (opens in a new tab)` : undefined}
          data-cursor={href ? "Open ↗" : cursorLabel}
          className="relative touch-none select-none"
          initial={reduced ? false : { opacity: 0, scale: 0.4, rotate: pos.rotate * 3 }}
          animate={{ opacity: 1, scale: 1, rotate: pos.rotate }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.7 + index * 0.07 }}
          whileHover={reduced ? undefined : { scale: 1.04, rotate: pos.rotate * 0.4 }}
          whileDrag={{ scale: 1.08, rotate: 0, cursor: "grabbing" }}
          drag
          dragConstraints={canvasRef}
          dragElastic={0.18}
          dragTransition={{ power: 0.35, timeConstant: 260, bounceStiffness: 260, bounceDamping: 18 }}
          onPointerDown={() => {
            dragged.current = false;
            onFront();
          }}
          onDragStart={() => {
            dragged.current = true;
            setActive(true);
          }}
          onDragEnd={() => setActive(false)}
          onHoverStart={() => setActive(true)}
          onHoverEnd={() => setActive(false)}
          onClick={open}
          onKeyDown={(e) => e.key === "Enter" && open()}
        >
          {children}

          {/* Figma selection frame */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-2.5 rounded-[3px] border-[1.5px] border-[#0D99FF]"
            initial={false}
            animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.97 }}
            transition={{ duration: 0.18, ease }}
          >
            {["-left-[4px] -top-[4px]", "-right-[4px] -top-[4px]", "-bottom-[4px] -left-[4px]", "-bottom-[4px] -right-[4px]"].map((c) => (
              <span key={c} className={`absolute h-[7px] w-[7px] border-[1.5px] border-[#0D99FF] bg-white ${c}`} />
            ))}
            <span className="absolute -top-6 left-[-1.5px] whitespace-nowrap rounded-[3px] bg-[#0D99FF] px-1.5 py-[2px] font-mono text-[10px] text-white">
              {name}
            </span>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
