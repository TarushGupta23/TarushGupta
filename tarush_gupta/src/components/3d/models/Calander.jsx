import { Clone, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import Icon from '../Icon';

export default function Calander({idx, setIdx}) {
    const model = useGLTF('./models/CalanderAnimation.glb');
    model.scene.children[6].visible = false

    const clone = useRef()
    
    return <Clone object={model.scene} position-y={4.6} ref={clone}> 
        <Icon idx={idx} icon='calendar' position={[-5.54, -3.19, 0.10]} setIdx={() => setIdx(5)} />
    </Clone>;
}

useGLTF.preload('./models/CalanderAnimation.glb');
