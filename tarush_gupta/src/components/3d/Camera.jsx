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
    const cameraInnerGrp = useRef();
    // const {x, y, z, a, b, c} = useControls('', {
    //     x: { value: 1.5, min: -2*Math.PI, max: 2*Math.PI, step: .05 },
    //     y: { value: 4.6-1.53, min: -2*Math.PI, max: 2*Math.PI, step: .05 },
    //     z: { value: -2.59, min: -2*Math.PI, max: 2*Math.PI, step: .05 },
    //     a: { value: -2.59, min: -20, max: 20, step: .05 },
    //     b: { value: -2.59, min: -20, max: 20, step: .05 },
    //     c: { value: -2.59, min: -20, max: 20, step: .05 },
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
        
        cameraInnerGrp.current.position.x = (parallaxX - cameraInnerGrp.current.position.x)*0.5;
        cameraInnerGrp.current.position.y = (parallaxY - cameraInnerGrp.current.position.y)*0.5;
    })

    return <group 
        ref={cameraGrp}
        position={rawPath[dataLen-1].position} 
        rotation={rawPath[dataLen-1].rotation}
        // position={[a, b, c]} 
        // rotation={[x, y, z]}
    >
        <group ref={cameraInnerGrp}>
            <PerspectiveCamera 
                ref={camera}
                makeDefault 
                fov='30'
                position={[0, 0, 0]}
            />
        </group>
    </group>
}