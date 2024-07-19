import { PerspectiveCamera } from "@react-three/drei";
import getFov, { cameraPath } from "../../data";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

let isTransitioning = false;
let isScrolling = false;
let transitionTimeout;
let currentCamIndex = 0;

export default function Camera() {
    useEffect(() => {
        window.addEventListener('wheel', (event) => {
            if (isTransitioning || isScrolling) return; // Ignore scroll events if transitioning or already scrolling

            isScrolling = true; // Set scrolling flag
            if (event.deltaY > 0) {
                currentCamIndex = (currentCamIndex + 1) % cameraPath.length;
            } else {
                currentCamIndex = (currentCamIndex - 1 + cameraPath.length) % cameraPath.length;
            }

            // Set timeout to reset scrolling flag after delay
            if (transitionTimeout) clearTimeout(transitionTimeout);
            transitionTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1500);    
        })

        return () => { if (transitionTimeout) clearTimeout(transitionTimeout) }
    }, [])

    const cameraGrp = useRef();
    const camera = useRef();
    useEffect(()=> {
        console.log(camera.current.getFocalLength())
    }, [camera])

    useFrame(() => {
        cameraGrp.current.position.lerp(cameraPath[currentCamIndex].position, .05)
        camera.current.setFocalLength(cameraPath[currentCamIndex].fov)
        cameraGrp.current.rotation.setFromVector3(cameraPath[currentCamIndex].rotation)
    })

    return <group 
        ref={cameraGrp}
        position={[0, 15, 25]} 
        rotation={[-.6, 0, 0]}
    >
        <PerspectiveCamera 
            ref={camera}
            makeDefault 
            fov={30}
            position={[0, 0, 0]}
        />
    </group>
}