import { Canvas } from "@react-three/fiber";
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';

import CupHtml from './components/cup/CupHtml';
import ComputerHtml from './components/computer/ComputerHtml';
import AlexaHtml from './components/alexa/alexaHtml';
import { Suspense, useEffect, useRef, useState } from "react";
import { Environment, OrbitControls, useProgress } from "@react-three/drei";
import Camera  from "./components/3d/Camera";
import Model from './components/3d/Model'
import { cameraPath, dataLen } from "./data";

let isScrolling = false;
let transitionTimeout;

function App() {
    // const [cameraIndex, setCameraIndex] = useState(cameraPath.length - 1);
    const [cameraIndex, setCameraIndex] = useState(3);
    const orbitControlRef = useRef()
    const { progress } = useProgress()

    // useEffect(() => {
    //     if (progress == 100) { setCameraIndex(0) }
    // }, [progress])

    // useEffect(() => {
    //     const handleWheel = (event) => {
    //         if (isScrolling) return; // Ignore scroll events if transitioning or already scrolling
    //         isScrolling = true; // Set scrolling flag
    //         if (event.deltaY > 0) {
    //             setCameraIndex((idx) => {
    //                 idx = (idx + 1) % cameraPath.length
    //                 return idx
    //             });
    //         } else {
    //             setCameraIndex((idx) => {
    //                 idx = (idx - 1 + cameraPath.length) % cameraPath.length
    //                 return idx
    //             });
    //         }
    //         // Set timeout to reset scrolling flag after delay
    //         if (transitionTimeout) clearTimeout(transitionTimeout);

    //         transitionTimeout = setTimeout(() => {
    //             isScrolling = false;
    //         }, 2000);    
    //     }

    //     window.addEventListener('wheel', handleWheel)

    //     return () => { 
    //         if (transitionTimeout) clearTimeout(transitionTimeout) 
    //         window.removeEventListener('wheel', handleWheel)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (orbitControlRef.current) {
    //         console.log(orbitControlRef.current.enabled)
    //     }
    // }, [cameraIndex])

    return <>
        <Navbar setCameraIndex={setCameraIndex} cameraIndex={cameraIndex} />

        <Canvas>
            <Camera cameraIndex={cameraIndex} />
        
            {/* <OrbitControls enabled ref={orbitControlRef}
                makeDefault
                enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI * 0.55} /> */}

            <Suspense fallback={null}>
                <Environment background files={'maps/map.hdr'} backgroundRotation={[0, Math.PI, 0]} environmentRotation={[0, Math.PI, 0]} environmentIntensity={.7} />
                <Model cameraIndex={cameraIndex} />
            </Suspense>
        </Canvas>

        <Loader progress={progress.toFixed()} />
        <CupHtml idx={cameraIndex} />
        <ComputerHtml idx={cameraIndex} />
        {/* { cameraIndex === 3 && <IphoneHtml /> } */}
        <AlexaHtml idx={cameraIndex} />
    </>
}

export default App;
