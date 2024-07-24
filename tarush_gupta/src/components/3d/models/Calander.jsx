import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import Icon from '../Icon';

export default function Calander({idx}) {
    const model = useGLTF('./models/CalanderAnimation.glb');
    useEffect(() => {
        if (model.scene) 
            model.scene.children[6].visible = false
    }, [model.scene])
    // console.log(model)
    return <primitive object={model.scene} position-y={4.6}> 
        <Icon idx={idx} icon='calendar' position={[-5.54, -3.19, 0.10]} />
    </primitive>;
}

useGLTF.preload('./models/CalanderAnimation.glb');
