import * as THREE from "three";
import { skills } from "../../content/site";

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((res, rej) => {
    const im = new Image();
    im.crossOrigin = "anonymous";
    im.onload = () => res(im);
    im.onerror = rej;
    im.src = src;
  });

function canvasTexture(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void | Promise<void>) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const g = c.getContext("2d")!;
  // wait for web fonts so canvas text never falls back to a system face
  document.fonts.ready.then(() => draw(g)).then(() => (tex.needsUpdate = true));
  return { tex, canvas: c, g };
}

function cover(g: CanvasRenderingContext2D, im: HTMLImageElement, x: number, y: number, w: number, h: number, focusY = 0.5) {
  const s = Math.max(w / im.width, h / im.height);
  const sw = w / s;
  const sh = h / s;
  g.drawImage(im, (im.width - sw) / 2, (im.height - sh) * focusY, sw, sh, x, y, w, h);
}

function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath();
  g.roundRect(x, y, w, h, r);
}

function folder(g: CanvasRenderingContext2D, x: number, y: number, s: number, label: string) {
  g.fillStyle = "#4aa3f5";
  roundRect(g, x, y + s * 0.08, s * 0.46, s * 0.2, s * 0.05);
  g.fill();
  const grad = g.createLinearGradient(0, y + s * 0.18, 0, y + s * 0.82);
  grad.addColorStop(0, "#9fd3ff");
  grad.addColorStop(1, "#5aaff7");
  g.fillStyle = grad;
  roundRect(g, x, y + s * 0.18, s, s * 0.64, s * 0.08);
  g.fill();
  g.font = `500 ${s * 0.2}px -apple-system, Geist, sans-serif`;
  g.fillStyle = "#fff";
  g.textAlign = "center";
  g.shadowColor = "rgba(0,0,0,.7)";
  g.shadowBlur = 4;
  g.fillText(label.length > 12 ? label.slice(0, 11) + "…" : label, x + s / 2, y + s * 1.08);
  g.shadowBlur = 0;
}

/** The MacBook screen: Eymen's wallpaper, menu bar with a live clock, case-study folders, a dock. */
export function laptopScreen(wallpaper: string, folders: string[]) {
  const W = 1280;
  const H = 820;
  let bg: HTMLImageElement | null = null;
  const t = canvasTexture(W, H, async () => {
    bg = await loadImage(wallpaper).catch(() => null);
    paint();
  });
  function paint() {
    const g = t.g;
    g.fillStyle = "#1d3b5a";
    g.fillRect(0, 0, W, H);
    if (bg) cover(g, bg, 0, 0, W, H, 0.4);
    g.fillStyle = "rgba(0,0,0,.12)";
    g.fillRect(0, 0, W, H);
    // menu bar
    g.fillStyle = "rgba(20,24,32,.45)";
    g.fillRect(0, 0, W, 34);
    g.fillStyle = "#fff";
    g.font = "600 19px -apple-system, Geist, sans-serif";
    g.textAlign = "left";
    g.fillText("Finder", 22, 24);
    g.font = "400 19px -apple-system, Geist, sans-serif";
    ["File", "Edit", "View", "Go", "Window"].forEach((m, i) => g.fillText(m, 100 + i * 66, 24));
    g.textAlign = "right";
    const now = new Date();
    g.fillText(now.toLocaleString("en-US", { weekday: "short", hour: "numeric", minute: "2-digit" }), W - 18, 24);
    // folders
    folders.forEach((f, i) => folder(g, W - 260 + (i % 2) * 125, 70 + Math.floor(i / 2) * 130, 92, f));
    // handwriting
    g.save();
    g.translate(110, H - 200);
    g.rotate(-0.12);
    g.font = "56px Caveat, cursive";
    g.fillStyle = "rgba(255,255,255,.85)";
    g.textAlign = "left";
    g.fillText("ship it, then make it better.", 0, 0);
    g.restore();
    // dock
    g.fillStyle = "rgba(255,255,255,.28)";
    roundRect(g, W / 2 - 300, H - 92, 600, 76, 22);
    g.fill();
    ["#1e90ff", "#38b0ff", "#0a66c2", "#181717", "#ff9500", "#e5382b", "#1b1b1b"].forEach((c, i) => {
      g.fillStyle = c;
      roundRect(g, W / 2 - 270 + i * 78, H - 80, 56, 56, 13);
      g.fill();
    });
    t.tex.needsUpdate = true;
  }
  paint();
  const timer = window.setInterval(paint, 30_000);
  return { texture: t.tex, dispose: () => window.clearInterval(timer) };
}

/** The iPhone lock-screen-ish Messages thread that the phone opens. */
export function phoneScreen() {
  return canvasTexture(390, 844, (g) => {
    g.fillStyle = "#fff";
    g.fillRect(0, 0, 390, 844);
    g.fillStyle = "#000";
    roundRect(g, 140, 18, 110, 32, 16);
    g.fill();
    g.font = "600 17px -apple-system, Geist, sans-serif";
    g.fillText(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), 34, 42);
    g.fillStyle = "#2340d9";
    g.beginPath();
    g.arc(195, 110, 30, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#fff";
    g.font = "800 26px Nunito, sans-serif";
    g.textAlign = "center";
    g.fillText("ek", 195, 119);
    g.fillStyle = "#111";
    g.font = "500 15px -apple-system, Geist, sans-serif";
    g.fillText("Eymen ›", 195, 162);
    const bubble = (text: string, me: boolean, y: number) => {
      g.font = "400 19px -apple-system, Geist, sans-serif";
      const w = Math.min(280, g.measureText(text).width + 34);
      const x = me ? 390 - 18 - w : 18;
      g.fillStyle = me ? "#0a84ff" : "#e9e9eb";
      roundRect(g, x, y, w, 44, 22);
      g.fill();
      g.fillStyle = me ? "#fff" : "#111";
      g.textAlign = "left";
      g.fillText(text, x + 17, y + 29);
    };
    bubble("hey! you found my phone 👋", false, 210);
    bubble("tap to say hi →", false, 266);
    bubble("hi Eymen!", true, 336);
    bubble("let's talk internships", true, 392);
    g.fillStyle = "#e9e9eb";
    roundRect(g, 18, 770, 354, 44, 22);
    g.fill();
    g.fillStyle = "#999";
    g.font = "400 18px -apple-system, Geist, sans-serif";
    g.fillText("iMessage", 38, 799);
  }).tex;
}

/** Cork pinboard with skill notes (the board opens the full skills panel). */
export function corkBoard() {
  return canvasTexture(1024, 680, (g) => {
    g.fillStyle = "#c79a68";
    g.fillRect(0, 0, 1024, 680);
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = Math.random() > 0.5 ? "rgba(120,80,40,.18)" : "rgba(255,230,190,.18)";
      g.fillRect(Math.random() * 1024, Math.random() * 680, 2, 2);
    }
    const pins = ["#ff5b35", "#2340d9", "#2bd98b", "#ffd84d", "#a259ff"];
    skills.slice(0, 5).forEach((s, i) => {
      const x = 50 + (i % 3) * 320 + (i >= 3 ? 150 : 0);
      const y = 50 + Math.floor(i / 3) * 320;
      g.save();
      g.translate(x + 140, y + 120);
      g.rotate([-0.05, 0.04, -0.03, 0.05, -0.02][i]);
      g.fillStyle = "rgba(0,0,0,.25)";
      g.fillRect(-136, -110, 284, 236);
      g.fillStyle = i === 4 ? "#fff3b0" : "#fffdf6";
      g.fillRect(-140, -116, 280, 232);
      g.fillStyle = pins[i];
      g.beginPath();
      g.arc(0, -100, 12, 0, Math.PI * 2);
      g.fill();
      g.fillStyle = "#141312";
      g.textAlign = "center";
      g.font = "40px 'Patrick Hand', cursive";
      g.fillText(s.label, 0, -40);
      g.font = "27px 'Patrick Hand', cursive";
      g.fillStyle = "#45423b";
      s.items.slice(0, 4).forEach((it, k) => g.fillText(it.length > 20 ? it.slice(0, 19) + "…" : it, 0, 4 + k * 34));
      g.restore();
    });
  }).tex;
}

/** A printed certificate for the recognition frame. */
export function certificate() {
  return canvasTexture(600, 800, (g) => {
    g.fillStyle = "#fbf7ee";
    g.fillRect(0, 0, 600, 800);
    g.strokeStyle = "#c9a227";
    g.lineWidth = 10;
    g.strokeRect(28, 28, 544, 744);
    g.lineWidth = 2;
    g.strokeRect(46, 46, 508, 708);
    g.textAlign = "center";
    g.fillStyle = "#8a6a10";
    g.font = "600 30px Fraunces, Georgia, serif";
    g.fillText("HackGT 13", 300, 150);
    g.fillStyle = "#141312";
    g.font = "800 120px Fraunces, Georgia, serif";
    g.fillText("1st", 300, 330);
    g.font = "500 34px Fraunces, Georgia, serif";
    g.fillText("ElevenLabs Track", 300, 400);
    g.font = "italic 30px Fraunces, Georgia, serif";
    g.fillStyle = "#45423b";
    g.fillText("awarded to", 300, 480);
    g.font = "64px Caveat, cursive";
    g.fillStyle = "#2340d9";
    g.fillText("Eymen Keyvan", 300, 560);
    g.fillStyle = "#c9a227";
    g.beginPath();
    g.arc(300, 670, 44, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "#fff";
    g.font = "800 34px Nunito, sans-serif";
    g.fillText("★", 300, 683);
  }).tex;
}

/** Keyboard + trackpad for the MacBook deck. */
export function keyboardDeck() {
  return canvasTexture(1024, 712, (g) => {
    g.fillStyle = "#c4c7cc";
    g.fillRect(0, 0, 1024, 712);
    g.fillStyle = "#1c1d20";
    roundRect(g, 70, 40, 884, 380, 14);
    g.fill();
    g.fillStyle = "#2a2b2f";
    const rows = [14, 14, 13, 12, 11];
    rows.forEach((n, r) => {
      const kw = 884 / 14.6;
      for (let i = 0; i < n; i++) {
        roundRect(g, 82 + i * kw + (14 - n) * kw * 0.5, 54 + r * 72, kw - 8, 60, 8);
        g.fill();
      }
    });
    roundRect(g, 82 + 4 * 60, 54 + 5 * 72 - 6, 380, 46, 8);
    g.fill();
    g.fillStyle = "#b8bbc1";
    roundRect(g, 330, 450, 364, 230, 18);
    g.fill();
  }).tex;
}
