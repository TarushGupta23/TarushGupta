import { Clone, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function Trophies() {
    const model = useGLTF('./models/Trophies.glb');
    const clone = useRef()
    useEffect(() => {
        if (clone.current) {
            clone.current.children[4].rotation.set(0, Math.PI, 0)
            console.log(clone.current.children[4])
        }
    }, [clone.current])
    return <Clone object={model.scene} position-y={4.6} ref={clone} />;
}

useGLTF.preload('./models/Trophies.glb');
