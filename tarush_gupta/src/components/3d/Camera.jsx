import { PerspectiveCamera } from "@react-three/drei";
import { cameraPath, dataLen, rawPath } from "../../data";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useControls } from "leva";

const cameraRotation = new Vector3().copy(cameraPath[dataLen - 1].rotation)
let parallaxX = 0, parallaxY = 0;

export default function Camera({ cameraIndex }) {
    const cameraGrp = useRef();
    const camera = useRef();
    // const {x, y, z} = useControls('', {
    //     x: { value: 1.5, min: -Math.PI, max: Math.PI, step: .05 },
    //     y: { value: 4.6-1.53, min: -Math.PI, max: Math.PI, step: .05 },
    //     z: { value: -2.59, min: -Math.PI, max: Math.PI, step: .05 }
    // })

    useEffect(() => {
        camera.current && camera.current.setFocalLength(36.76215277777778)
    }, [camera])

    
    useEffect(() => {
        const handleMouseMove = (event) => {
            parallaxX = event.clientX / window.innerWidth - 0.5;
            parallaxY = -(event.clientY / window.innerHeight - 0.5);

        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame(() => {
        cameraGrp.current.position.lerp(cameraPath[cameraIndex].position, .05)
        cameraRotation.lerp(cameraPath[cameraIndex].rotation, .05)
        cameraGrp.current.rotation.setFromVector3(cameraRotation)
        
        // camera.current.position.x = (parallaxX - camera.current.position.x)*0.5;
        // camera.current.position.y = (parallaxY - camera.current.position.y)*0.5;
    })

    return <group 
        ref={cameraGrp}
        position={rawPath[dataLen-1].position} 
        rotation={rawPath[dataLen-1].rotation}
        // position={[3.205, -2.75 + 4.6, 6.74]}
        // rotation={[0, -.4, 0]}
        // position={[x, y, z]} 
        // rotation={[...]}
    >
        <PerspectiveCamera 
            ref={camera}
            makeDefault 
            fov='30'
            position={[0, 0, 0]}
        />
    </group>
}