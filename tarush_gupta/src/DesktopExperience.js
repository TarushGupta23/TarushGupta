import { Canvas } from "@react-three/fiber";
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';

import CupHtml from './components/cup/CupHtml';
import ComputerHtml from './components/computer/ComputerHtml';
import AlexaHtml from './components/alexa/alexaHtml';
import { Suspense, useEffect, useState } from "react";
import { Environment, OrbitControls, useProgress } from "@react-three/drei";
import Camera  from "./components/3d/Camera";
import Model from './components/3d/Model'
import { dataLen, paths } from "./data";
import CreditsHtml from "./components/credits/CreditsHtml";
import ResumeHtml from "./components/resume/ResumeHtml";
import {Perf} from 'r3f-perf'

let isScrolling = false;
let transitionTimeout;

function DesktopExperience() {
    const [cameraIndex, setCameraIndex] = useState(0);
    const [docLocation, setDocLocation] = useState(0);
    const { progress } = useProgress()

    useEffect(() => {
        if (progress == 100) { setCameraIndex(1) }
    }, [progress])

    window.pwd = () => { console.log(`TarushGupta/potfolioWebsite/${paths[cameraIndex]}`) }
    window.cd = (destination) => {
        if (!paths.includes(destination)) {
            console.error('Path not found!!')
        } else {
            let i = paths.indexOf(destination);
            if (i === cameraIndex) {
                console.log('Already at destination')
            } else {
                setCameraIndex(i)
            }
        }
    }

    useEffect(() => {
        const handleWheel = (event) => {
            if (isScrolling) return;

            isScrolling = true;
            if (event.deltaY > 0) {
                setCameraIndex((idx) => {
                    idx = (idx + 1) % dataLen
                    return idx
                });
            } else {
                setCameraIndex((idx) => {
                    idx = (idx - 1 + dataLen) % dataLen
                    return idx
                });
            }
            if (transitionTimeout) clearTimeout(transitionTimeout);

            transitionTimeout = setTimeout(() => {
                isScrolling = false;
            }, 2000);
        }

        window.addEventListener('wheel', handleWheel)
        window.ls = () => { console.log(paths) }

        window.touch = (url) => {
            if (url === 'linkedin') {
                window.open('https://www.linkedin.com/in/tarush23-gupta/', '_blank').focus();
            } else if (url === 'github') {
                window.open('https://github.com/TarushGupta23', '_blank').focus();
            } else if (url === 'insta') {
                window.open('https://www.instagram.com/tarush._.gupta/', '_blank').focus();
            } else {
                console.error('Invalid URL')
            }
        }

        return () => { 
            if (transitionTimeout) {
                clearTimeout(transitionTimeout)
                isScrolling = false;
            }
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return <>
        <Navbar setCameraIndex={setCameraIndex} cameraIndex={cameraIndex} />

        <Canvas>
            <Perf />
            <Camera cameraIndex={cameraIndex} />
        
            <OrbitControls enabled={cameraIndex===0} makeDefault enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI * 0.55} />

            <Suspense fallback={null}>
                <Environment background files={'backgrounds/map.hdr'} backgroundRotation={[0, Math.PI, 0]} environmentRotation={[0, Math.PI, 0]} environmentIntensity={.7} />
                <Model {...{ cameraIndex, setCameraIndex, docLocation }}/>
            </Suspense>
        </Canvas>

        <Loader progress={progress.toFixed()} />
        <CupHtml idx={cameraIndex} />
        <ComputerHtml idx={cameraIndex} />
        <AlexaHtml idx={cameraIndex} />
        <CreditsHtml idx={cameraIndex} />
        <ResumeHtml idx={cameraIndex} {...{ docLocation, setDocLocation }}  />
    </>
}

export default DesktopExperience;
