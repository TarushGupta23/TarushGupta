import { Clone, useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Icon from '../Icon';
import { LoopOnce } from 'three';

export default function Calander({ idx, setIdx, eventLoc }) {
    const model = useGLTF('./models/CalanderAnimation.glb');
    model.scene.children[6].visible = false

    const clone = useRef()
    const animation = useAnimations(model.animations, clone.current)
    
    useEffect(() => {
        const actionFwd = animation.actions['Fwd']
        // const actionBack = animation.actions['Bwd']
        const timeScale = 2

        if (actionFwd) {
            actionFwd.timeScale = timeScale
            actionFwd.setLoop(LoopOnce, 1).reset().play();
        }
    }, [eventLoc])
    
    return <Clone object={model.scene} position-y={4.6} ref={clone}> 
        <Icon idx={idx} icon='calendar' position={[-5.54, -3.19, 0.10]} setIdx={() => setIdx(5)} />
    </Clone>;
}

useGLTF.preload('./models/CalanderAnimation.glb');
