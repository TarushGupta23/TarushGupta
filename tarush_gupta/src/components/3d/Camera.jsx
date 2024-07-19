import { PerspectiveCamera } from "@react-three/drei";
import { cameraPath } from "../../data";

export default function Camera() {
    return <group 
        position={cameraPath[0].position} 
        rotation={cameraPath[0].rotation}
    >
        <PerspectiveCamera 
            makeDefault 
            // rotation={[-.16, .03, 0]}
            fov={cameraPath[0].fov}
            position={[0, 0, 0]}
        />
    </group>
}