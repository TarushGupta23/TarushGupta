import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { cameraPath, homeCamera } from "../../data";

const cameraRotation = new Vector3().copy(cameraPath[0].rotation)
const cameraPosition = new Vector3(-0.35, 17.6, 52.7)
let parallaxX = 0, parallaxY = 0;

export default function Camera({ cameraIndex }) {
    const cameraGrp = useRef();
    const camera = useRef();
    const cameraInnerGrp = useRef();

    useEffect(() => {
        camera.current && camera.current.setFocalLength(36.76215277777778)
    }, [camera])
    
    // const {x, y, z, a, b, c} = useControls('camera', {
    //     x: {value: 0, min: -100, max: 100, step: 0.01},
    //     y: {value: 0, min: -100, max: 30, step: 0.01},
    //     z: {value: 0, min: -100, max: 30, step: 0.01},
    //     a: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01},
    //     b: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01},
    //     c: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01}
    // })
    
    useEffect(() => {   
        const handleMouseMove = (event) => {
            if (cameraIndex !== 0) {
                parallaxX = event.clientX / window.innerWidth - 0.5;
                parallaxY = -(event.clientY / window.innerHeight - 0.5);
            } else {
                parallaxX = 0; parallaxY = 0;
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        cameraRotation.setFromEuler(camera.current.rotation)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [cameraIndex])

    useFrame(() => {
        cameraGrp.current.position.lerp(cameraPath[cameraIndex].position, .05)
        if (cameraIndex !== 0) {
            cameraRotation.lerp(cameraPath[cameraIndex].rotation, .05)
            camera.current.rotation.setFromVector3(cameraRotation)
            camera.current.position.lerp(cameraPosition, .05)
        }

        cameraInnerGrp.current.position.x = (parallaxX - cameraInnerGrp.current.position.x)*0.5;
        cameraInnerGrp.current.position.y = (parallaxY - cameraInnerGrp.current.position.y)*0.5;
    })


    return <group 
        ref={cameraGrp}
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]}
        >
        <group ref={cameraInnerGrp} >
            <PerspectiveCamera 
                position={homeCamera} 
                ref={camera}
                makeDefault 
                fov='30'
                near={2}
                far={80}
            />
        </group>
    </group>
}