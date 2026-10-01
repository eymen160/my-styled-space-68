import { Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree, type GroupProps } from "@react-three/fiber";
import { ContactShadows, Environment, Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import { photos } from "../../content/site";
import { CASES } from "../panels/cases";
import { IPhone, MacBook } from "./Devices";
import { certificate, corkBoard } from "./textures";

export type DeskTarget = "desktop" | "phone" | "camera" | "cup" | "package" | "shelf" | "pinboard" | "notebook" | "microscope";

const M = "/models/";
const T = 0.549; // table-top height of WoodenTable_01, metres
const TABLE_SCALE: [number, number, number] = [1.35, 1, 1.75];

/* ───────────────────────── scanned props ───────────────────────── */

// Scanned glass (clock faces, picture glass) ships with a dark smudge texture; real glass is nearly clear.
const clearGlass = () => new THREE.MeshPhysicalMaterial({ transparent: true, opacity: 0.12, roughness: 0.04, metalness: 0, clearcoat: 1, color: "#ffffff" });

function Model({ file, ...props }: { file: string } & GroupProps) {
  const { scene } = useGLTF(M + file);
  const clone = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      m.receiveShadow = true;
      if ((m.material as THREE.Material).name?.toLowerCase().includes("glass")) {
        m.material = clearGlass();
        m.castShadow = false;
      }
    });
    return c;
  }, [scene]);
  return <primitive object={clone} {...props} />;
}

/** A picture frame whose artwork is swapped for one of Eymen's photos or a texture. */
function Frame({ file, art, ...props }: { file: string; art: THREE.Texture } & GroupProps) {
  const { scene } = useGLTF(M + file);
  const clone = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = true;
      const mat = m.material as THREE.MeshStandardMaterial;
      if (mat.name.endsWith("_glass")) {
        // the scanned glass carries a dark smudge texture; real picture glass is nearly invisible
        m.material = clearGlass();
        m.castShadow = false;
        return;
      }
      if (!mat.name.endsWith("_artwork")) return;
      // the artwork may only use a corner of the texture atlas: stretch the photo over that UV range
      const uv = m.geometry.getAttribute("uv");
      let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
      for (let i = 0; i < uv.count; i++) {
        u0 = Math.min(u0, uv.getX(i));
        u1 = Math.max(u1, uv.getX(i));
        v0 = Math.min(v0, uv.getY(i));
        v1 = Math.max(v1, uv.getY(i));
      }
      // each artwork texture is used by exactly one frame, so adjust it in place (a clone would miss the
      // late needsUpdate from canvas textures that redraw once web fonts load)
      const t = art;
      t.flipY = false;
      t.colorSpace = THREE.SRGBColorSpace;
      t.repeat.set(1 / (u1 - u0), 1 / (v1 - v0));
      t.offset.set(-u0 * t.repeat.x, -v0 * t.repeat.y);
      t.needsUpdate = true;
      m.material = new THREE.MeshStandardMaterial({ map: t, roughness: 0.6, metalness: 0 });
    });
    return c;
  }, [scene, art]);
  return <primitive object={clone} {...props} />;
}

/* ───────────────────────── interaction ───────────────────────── */

/** Lifts on hover, shows a handwritten label, opens a panel on click. */
function Hot({
  target,
  label,
  onOpen,
  children,
  labelY = 0.2,
  lift = 0.018,
  ...props
}: {
  target: DeskTarget;
  label: string;
  onOpen: (id: DeskTarget) => void;
  children: ReactNode;
  labelY?: number;
  lift?: number;
} & GroupProps) {
  const ref = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  const base = useRef<number | null>(null);

  useFrame((_, dt) => {
    const g = ref.current;
    if (!g) return;
    if (base.current === null) base.current = g.position.y;
    const target = base.current + (hover ? lift : 0);
    g.position.y = THREE.MathUtils.damp(g.position.y, target, 10, dt);
  });

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hover]);

  return (
    <group
      ref={ref}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        onOpen(target);
      }}
    >
      {children}
      <Html position={[0, labelY, 0]} center zIndexRange={[20, 0]} style={{ pointerEvents: "none" }}>
        <span
          className="note block whitespace-nowrap rounded-full bg-white px-3 py-1 text-[1.05rem] text-ink shadow-lg transition-all duration-300"
          style={{ opacity: hover ? 1 : 0, transform: `translateY(${hover ? 0 : 8}px) scale(${hover ? 1 : 0.9})` }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

/* ───────────────────────── camera ───────────────────────── */

const REST = { pos: new THREE.Vector3(0, T + 0.9, 2.12), look: new THREE.Vector3(0, T + 0.13, -0.16) };
const FAR = { pos: new THREE.Vector3(-0.35, T + 0.8, 3.0), look: new THREE.Vector3(0, T + 0.18, -0.2) };
const SCREEN = { pos: new THREE.Vector3(0, T + 0.15, 0.2), look: new THREE.Vector3(0, T + 0.11, -0.2) };

/** Scroll dollies from a wide establishing shot onto the desk; clicking the laptop flies into its screen. */
function Rig({ progress, zoom, reduced }: { progress: MotionValue<number>; zoom: boolean; reduced: boolean }) {
  const { camera, size } = useThree();
  const look = useRef(REST.look.clone());
  const tmpPos = useMemo(() => new THREE.Vector3(), []);
  const tmpLook = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, dt) => {
    const p = reduced ? 1 : THREE.MathUtils.smootherstep(progress.get(), 0, 1);
    tmpPos.lerpVectors(FAR.pos, REST.pos, p);
    tmpLook.lerpVectors(FAR.look, REST.look, p);
    // portrait screens: step back so the whole desk fits
    const aspect = size.width / size.height;
    if (aspect < 1.2) tmpPos.add(new THREE.Vector3(0, 0.45, 1).multiplyScalar((1.2 - aspect) * 2));
    if (aspect < 1.2) tmpLook.y -= (1.2 - aspect) * 0.22;
    if (zoom) {
      tmpPos.copy(SCREEN.pos);
      tmpLook.copy(SCREEN.look);
    }
    const k = zoom ? 4.5 : 6;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, tmpPos.x, k, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, tmpPos.y, k, dt);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, tmpPos.z, k, dt);
    look.current.x = THREE.MathUtils.damp(look.current.x, tmpLook.x, k, dt);
    look.current.y = THREE.MathUtils.damp(look.current.y, tmpLook.y, k, dt);
    look.current.z = THREE.MathUtils.damp(look.current.z, tmpLook.z, k, dt);
    camera.lookAt(look.current);
  });
  return null;
}

/* ───────────────────────── the room ───────────────────────── */

function Room({ onOpen }: { onOpen: (id: DeskTarget) => void }) {
  const photo = useTexture(photos[0].src);
  const cert = useMemo(() => certificate(), []);
  const cork = useMemo(() => corkBoard(), []);
  const folders = useMemo(() => CASES.slice(0, 8).map((c) => c.folder), []);

  return (
    <group>
      {/* wall + floor */}
      <mesh position={[0, 1.2, -0.75]} receiveShadow>
        <planeGeometry args={[8, 3]} />
        <meshStandardMaterial color="#e9e3d8" roughness={0.95} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#b9a58c" roughness={0.9} />
      </mesh>

      <Model file="woodentable_01.glb" scale={TABLE_SCALE} />
      <ContactShadows position={[0, T + 0.0015, 0]} scale={[2.6, 1.3]} blur={2.2} opacity={0.55} far={0.6} resolution={1024} color="#2a1a0c" />

      {/* skills pinboard on the wall */}
      <Hot target="pinboard" label="the pinboard" onOpen={onOpen} position={[0.62, T + 0.5, -0.735]} labelY={0.27} lift={0.012}>
        <mesh castShadow>
          <boxGeometry args={[0.62, 0.41, 0.022]} />
          <meshStandardMaterial color="#7a4e2a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.0115]}>
          <planeGeometry args={[0.58, 0.37]} />
          <meshStandardMaterial map={cork} roughness={0.95} />
        </mesh>
      </Hot>

      {/* centre: the laptop and the phone */}
      <Hot target="desktop" label="open my desktop" onOpen={onOpen} position={[0, T, -0.12]} labelY={0.28} lift={0.008}>
        <MacBook wallpaper={photos[2].src} folders={folders} />
      </Hot>
      <Hot target="phone" label="say hi" onOpen={onOpen} position={[0.1, T, 0.24]} rotation-y={-0.3} labelY={0.08}>
        <IPhone />
      </Hot>
      <Model file="round_spectacles.glb" position={[-0.17, T + 0.023, 0.3]} rotation-y={2.4} />

      {/* left: research + photos */}
      <Model file="potted_plant_02.glb" position={[-0.98, T, -0.45]} scale={0.52} rotation-y={0.6} />
      <Hot target="microscope" label="my research" onOpen={onOpen} position={[-0.62, T, -0.3]} rotation-y={0.55} labelY={0.46}>
        <Model file="vintage_microscope.glb" />
      </Hot>
      <Hot target="camera" label="say cheese" onOpen={onOpen} position={[-0.52, T, 0.15]} rotation-y={0.9} labelY={0.16}>
        <Model file="camera_01.glb" />
      </Hot>
      <Hot target="camera" label="say cheese" onOpen={onOpen} position={[-0.32, T, -0.38]} rotation-y={-Math.PI / 2 + 0.4} labelY={0.32} lift={0.01}>
        <Frame file="standing_picture_frame_01.glb" art={photo} />
      </Hot>

      {/* right: tea, resume, the box, recognition */}
      <Hot target="cup" label="what's in my cup" onOpen={onOpen} position={[0.36, T, 0.06]} scale={0.38} rotation-y={-0.15} labelY={0.45}>
        <Model file="tea_set_01.glb" />
      </Hot>
      <Hot target="shelf" label="the trophy shelf" onOpen={onOpen} position={[0.34, T, -0.4]} rotation-y={-Math.PI / 2 - 0.3} labelY={0.34} lift={0.01}>
        <Frame file="standing_picture_frame_02.glb" art={cert} />
      </Hot>
      <Hot target="notebook" label="what's on the table" onOpen={onOpen} position={[0.5, T, 0.3]} rotation-y={0.2} scale={0.62} labelY={0.14}>
        <Model file="binder_notebook.glb" position={[-0.135, 0, 0]} />
      </Hot>
      <Model file="stationery_supplies.glb" position={[0.22, T + 0.059, 0.36]} rotation-y={1.2} scale={0.8} />
      <Model file="alarm_clock_01.glb" position={[0.64, T, -0.4]} rotation-y={-0.5} />
      <Hot target="package" label="track my shipments" onOpen={onOpen} position={[0.86, T, 0.05]} rotation-y={-0.45} scale={0.6} labelY={0.36}>
        <Model file="cardboard_box_01.glb" />
      </Hot>
      <Model file="desk_lamp_arm_01.glb" position={[1.0, T, -0.45]} rotation-y={-1.75} scale={0.85} />
      <pointLight position={[0.85, T + 0.55, -0.15]} intensity={0.9} distance={1.6} color="#ffd9a0" />
    </group>
  );
}

function Fallback() {
  return (
    <Html center>
      <span className="note whitespace-nowrap text-xl text-ink/50">setting up the desk…</span>
    </Html>
  );
}

/** The whole 3D desk. Renders only while on screen. */
export default function DeskScene({
  progress,
  onOpen,
  zoom,
  reduced,
}: {
  progress: MotionValue<number>;
  onOpen: (id: DeskTarget) => void;
  zoom: boolean;
  reduced: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "200px" });
    if (host.current) io.observe(host.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={host} className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        frameloop={visible ? "always" : "never"}
        camera={{ fov: 34, near: 0.05, far: 30, position: FAR.pos.toArray() }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
      >
        <color attach="background" args={["#e7e1d6"]} />
        <fog attach="fog" args={["#e7e1d6", 3.5, 7]} />
        <Suspense fallback={<Fallback />}>
          <Environment files={M + "studio.hdr"} environmentIntensity={0.85} />
          <directionalLight
            position={[-2.2, 3.2, 1.6]}
            intensity={1.6}
            color="#fff1dc"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0004}
            shadow-normalBias={0.02}
            shadow-camera-left={-1.6}
            shadow-camera-right={1.6}
            shadow-camera-top={1.4}
            shadow-camera-bottom={-1.4}
          />
          <Room onOpen={onOpen} />
        </Suspense>
        <Rig progress={progress} zoom={zoom} reduced={reduced} />
      </Canvas>
    </div>
  );
}

[
  "woodentable_01",
  "vintage_microscope",
  "camera_01",
  "tea_set_01",
  "cardboard_box_01",
  "binder_notebook",
  "standing_picture_frame_01",
  "standing_picture_frame_02",
  "potted_plant_02",
  "desk_lamp_arm_01",
  "round_spectacles",
  "stationery_supplies",
  "alarm_clock_01",
].forEach((f) => useGLTF.preload(`${M}${f}.glb`));
