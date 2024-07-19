import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Camera from "./components/3d/Camera";
import Model from "./components/3d/Model";
import Lights from "./components/3d/Lights";

export default function Experience() {
    return <>
        <Canvas>
            <Camera />
            {/* <OrbitControls
                enableZoom={false}  enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI*0.55} /> */}

            {/* <Lights /> */}
            
            <Suspense fallback={null}>
                <Environment background files={'maps/map12.hdr'} />
                    <Model />
            </Suspense>
        </Canvas>
    </>
}