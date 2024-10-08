import { Clone, Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import Icon from '../Icon';
import { useRef } from 'react';

const positions = [
    { // home
        position: new Vector3(-5.5, 3.2, -4.6),
        rotation: new Vector3(.3, -3.8, 0),
    }, { // cup
        position: new Vector3(7.45, 2.85, -8),
        rotation: new Vector3(0, -3.55, 0),
    }, { // resume
        position: new Vector3(-6, 3.8, -7.2),
        rotation: new Vector3(-0.2, -2, 0),
    }, { // computer
        position: new Vector3(3.4, 5.0, -1.65),
        rotation: new Vector3(-0.1, -2.8, 0),
    }, { // android
        position: new Vector3(7, 2.65, -0.2),
        rotation: new Vector3(0.3, -3.9, 0.05),
    }, { // calender
        position: new Vector3(-5.5, 3.2, -4.6),
        rotation: new Vector3(.3, -3.8, 0),
    }, { // trophies
        position: new Vector3(3.63, 2.60, -6.17),
        rotation: new Vector3(0.22, -2.65, 0),
    }, { // alexa
        position: new Vector3(12, 4, -4),
        rotation: new Vector3(-.1, -3.4, 0),
    }, { // mail
        position: new Vector3(12, 4, -4),
        rotation: new Vector3(-.1, -3.4, 0),
    }, { // credits
        position: new Vector3(0, 16, 0),
        rotation: new Vector3(0.3, -2.32, 0.3),
    }
]

const currRotation = new Vector3(0, 0, 0);

export default function Drone({ idx, setIdx }) {
    const model = useGLTF('./models/drone.glb');
    const clone = useRef()
    
    useFrame(() => {
        if (clone.current) {
            clone.current.position.lerp(positions[idx].position, .02)
            currRotation.lerp(positions[idx].rotation, .02)
            clone.current.rotation.setFromVector3(currRotation)
        }
    })

    return <Float speed={4.5} rotationIntensity={.25} floatIntensity={.1} floatingRange={[-.1, .1]}>

        <Clone object={model.scene} scale={.65} ref={clone}> 
            <Icon idx={idx} icon='credits' position={[-0.04, 0.82, -0.09]} setIdx={() => setIdx(9)} />
        </Clone>

    </Float>
}

useGLTF.preload('./models/drone.glb');
