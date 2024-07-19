import { PerspectiveCamera } from "@react-three/drei";
import { cameraPath } from "../../data";

export default function Camera() {
    return <group 
        position={cameraPath[2].position} 
        rotation={cameraPath[2].rotation}
    >
        <PerspectiveCamera 
            makeDefault 
            // rotation={[-.16, .03, 0]}
            fov={cameraPath[2].fov}
            position={[0, 0, 0]}
        />
    </group>
}