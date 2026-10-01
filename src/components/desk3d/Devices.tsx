import { useEffect, useMemo } from "react";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { keyboardDeck, laptopScreen, phoneScreen } from "./textures";

const aluminium = { color: "#c9ccd2", metalness: 0.85, roughness: 0.32, envMapIntensity: 1.1 } as const;

/**
 * A 13" MacBook built from primitives: rounded aluminium body, keyboard deck, black bezel and a live
 * screen texture. Dimensions are real (31 × 21.5 cm), so it sits naturally among the scanned props.
 */
export function MacBook({ wallpaper, folders }: { wallpaper: string; folders: string[] }) {
  const screen = useMemo(() => laptopScreen(wallpaper, folders), [wallpaper, folders]);
  const deck = useMemo(() => keyboardDeck(), []);
  useEffect(() => () => screen.dispose(), [screen]);

  const W = 0.304;
  const D = 0.215;
  const open = THREE.MathUtils.degToRad(108);

  return (
    <group>
      {/* base */}
      <RoundedBox args={[W, 0.011, D]} radius={0.004} smoothness={4} position={[0, 0.0055, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial {...aluminium} clearcoat={0.2} />
      </RoundedBox>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.0112, 0.004]} receiveShadow>
        <planeGeometry args={[W * 0.96, D * 0.93]} />
        <meshStandardMaterial map={deck} metalness={0.4} roughness={0.5} />
      </mesh>
      {/* lid, hinged at the back edge */}
      <group position={[0, 0.011, -D / 2 + 0.002]} rotation-x={-(open - Math.PI / 2)}>
        <RoundedBox args={[W, 0.2, 0.0055]} radius={0.004} smoothness={4} position={[0, 0.1, -0.003]} castShadow>
          <meshPhysicalMaterial {...aluminium} />
        </RoundedBox>
        <mesh position={[0, 0.1, 0.0001]}>
          <planeGeometry args={[W * 0.985, 0.197]} />
          <meshStandardMaterial color="#0a0a0b" roughness={0.15} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.102, 0.0004]}>
          <planeGeometry args={[W * 0.935, 0.178]} />
          <meshBasicMaterial map={screen.texture} toneMapped={false} />
        </mesh>
        {/* glass sheen */}
        <mesh position={[0, 0.1, 0.0006]}>
          <planeGeometry args={[W * 0.985, 0.197]} />
          <meshPhysicalMaterial transparent opacity={0.08} roughness={0.05} metalness={0} clearcoat={1} color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}

/** iPhone lying on the desk, screen up, showing the Messages thread it opens. */
export function IPhone() {
  const screen = useMemo(() => phoneScreen(), []);
  return (
    <group>
      <RoundedBox args={[0.0716, 0.0078, 0.147]} radius={0.0035} smoothness={4} position={[0, 0.0039, 0]} castShadow receiveShadow>
        <meshPhysicalMaterial color="#2b2c30" metalness={0.8} roughness={0.35} clearcoat={0.6} />
      </RoundedBox>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.0079, 0]}>
        <planeGeometry args={[0.0675, 0.1425]} />
        <meshBasicMaterial map={screen} toneMapped={false} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.008, 0]}>
        <planeGeometry args={[0.0716, 0.147]} />
        <meshPhysicalMaterial transparent opacity={0.1} roughness={0.05} clearcoat={1} color="#ffffff" />
      </mesh>
    </group>
  );
}
