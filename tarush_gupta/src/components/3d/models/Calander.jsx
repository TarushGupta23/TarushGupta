import { Clone, Html, useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Icon from '../Icon';
import { LoopOnce } from 'three';
import CalenderScreen from '../../calender/CalenderScreen';
import IpadScreen from '../../calender/IpadScreen';

export default function Calander({ idx, setIdx, eventLoc }) {
    const model = useGLTF('./models/CalanderAnimation.glb');
    model.scene.children[6].visible = false
    const initPos = useRef(0)

    const clone = useRef()
    const animation = useAnimations(model.animations, clone.current)
    
    useEffect(() => {
        const actionFwd = animation.actions['Fwd']
        const actionBwd = animation.actions['Bwd']
        const timeScale = 2.5

        if (initPos.current < eventLoc && actionFwd) {
            actionFwd.timeScale = timeScale
            actionFwd.setLoop(LoopOnce, 1).reset().play();
        } else if (initPos.current > eventLoc && actionBwd) {
            actionBwd.timeScale = timeScale
            actionBwd.setLoop(LoopOnce, 1).reset().play();
        }
        initPos.current = eventLoc;
    }, [eventLoc])
    
    return <Clone object={model.scene} position-y={4.6} ref={clone}> 
        <Icon idx={idx} icon='calendar' position={[-5.54, -3.19, 0.10]} setIdx={() => setIdx(5)} />
        <Html transform center position={[-6.60, -3.43, 1.15]} rotation={[-0.40, 0.77, 0.28]} distanceFactor={2}>
            <CalenderScreen calenderLoc={eventLoc} idx={idx} />
        </Html>
        <Html transform center position={[-4.34, -3.27, -.5]} rotation={[-.3, 0.49, .14]} distanceFactor={2}>
            <IpadScreen idx={idx} />
        </Html>
    </Clone>;
}

useGLTF.preload('./models/CalanderAnimation.glb');
