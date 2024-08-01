import { Clone, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Icon from '../Icon';

export default function Trophies({idx, setIdx}) {
    const model = useGLTF('./models/Trophies.glb');
    const clone = useRef()

    useEffect(() => {
        if (clone.current) {
            clone.current.children[4].rotation.set(0, Math.PI, 0)
            clone.current.children[4].position.x = 4.818741035461426
        }
    }, [clone.current])
    return <Clone object={model.scene} position-y={4.6} ref={clone}> 
        <Icon idx={idx} icon='trophy' position={[4.8, -3.5, -3.7]} setIdx={() => setIdx(6)} />
    </Clone>;
}

useGLTF.preload('./models/Trophies.glb');
