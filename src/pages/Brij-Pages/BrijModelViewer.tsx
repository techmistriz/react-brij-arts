import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Bounds,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

function Model({ src, wireframe }: { src: string; wireframe: boolean }) {
  const { scene } = useGLTF(src);
  const cloned = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.08;
  });

  const processed = useMemo(() => {
    if (!wireframe) return cloned;
    const group = new THREE.Group();
    const edgeMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#6a6a6a"),
      transparent: true,
      opacity: 0.85,
    });
    cloned.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh && mesh.geometry) {
        // Only render edges where the angle between faces exceeds 25°,
        // dramatically reducing line density vs full wireframe.
        const edges = new THREE.EdgesGeometry(mesh.geometry, 25);
        const lines = new THREE.LineSegments(edges, edgeMat);
        mesh.updateWorldMatrix(true, false);
        lines.applyMatrix4(mesh.matrixWorld);
        group.add(lines);
      }
    });
    return group;
  }, [cloned, wireframe]);

  return (
    <group ref={ref}>
      <primitive object={processed} />
    </group>
  );
}

const Loader = () => (
  <Html center>
    <div className="text-foreground/70 font-heading uppercase tracking-[0.2em] text-sm">
      Loading 3D Model…
    </div>
  </Html>
);

interface Props {
  className?: string;
  margin?: number;
  transparent?: boolean;
  src?: string;
  wireframe?: boolean;
}

export default function BrijModelViewer({
  className,
  margin = 0.55,
  transparent = false,
  src = "/brij-model.glb",
  wireframe = true,
}: Props) {
  return (
    <div
      className={
        className ?? "w-full h-[80vh] md:h-screen bg-background relative"
      }
    >
      <Canvas
        camera={{ position: [2.2, 1.4, 2.2], fov: 35 }}
        dpr={[1, 1.6]}
        gl={{ alpha: transparent }}
        style={{ background: "transparent", touchAction: "pan-y" }}
      >
        {!transparent && <color attach="background" args={["#ffffff"]} />}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.0} castShadow />
        <directionalLight position={[-5, 3, -4]} intensity={0.35} />
        <Suspense fallback={<Loader />}>
          <Bounds fit clip observe margin={margin}>
            <Model src={src} wireframe={wireframe} />
          </Bounds>
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          rotateSpeed={0.8}
          touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.ROTATE }}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/brij-model.glb");
