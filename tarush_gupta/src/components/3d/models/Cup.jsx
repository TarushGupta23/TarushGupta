import { Clone, useGLTF } from '@react-three/drei';
import Icon from '../Icon';

export default function Cup({ idx, setIdx }) {
    const model = useGLTF('./models/Cup.glb');
    

    return <Clone object={model.scene} position-y={4.6} position-z={-.8}> 
        <Icon idx={idx} icon='cup' position={[5.90, -3.80, 4]} setIdx={() => setIdx(1)}/>
    </Clone>;
}

useGLTF.preload('./models/Cup.glb');
