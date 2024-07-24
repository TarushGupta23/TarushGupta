import { useGLTF } from '@react-three/drei';
import Icon from '../Icon';

export default function Cup({ idx }) {
    const model = useGLTF('./models/Cup.glb');
    

    return <primitive object={model.scene} position-y={4.6} position-z={1}> 
        <Icon idx={idx} icon='cup' position={[5.90, -3.80, 3.22]} />
    </primitive>;
}

useGLTF.preload('./models/Cup.glb');
