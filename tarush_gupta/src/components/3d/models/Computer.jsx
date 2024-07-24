import { useGLTF } from '@react-three/drei';
import Icon from '../Icon';

export default function Computer({idx}) {
    const model = useGLTF('./models/Computer.glb');
    
    return <primitive object={model.scene} position-y={4.6}>
        <Icon idx={idx} icon='laptop' position={[0, -1.8, -1.1]} />
    </primitive>;
}

useGLTF.preload('./models/Computer.glb');
