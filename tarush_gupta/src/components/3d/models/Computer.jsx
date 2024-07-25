import { Clone, Html, useGLTF } from '@react-three/drei';
import Icon from '../Icon';
import ComputerScreen from '../../computer/ComputerScreen';
import { useRef } from 'react';


export default function Computer({idx, setIdx}) {
    const model = useGLTF('./models/Computer.glb');
    const clone = useRef()

    return <Clone object={model.scene} position-y={4.6} ref={clone}>
        <Icon idx={idx} icon='laptop' position={[0, -1.8, -1.1]} setIdx={() => setIdx(3)} />
        {/* <Html center transform position={[-0.01, -1.63, -0.9]} >
            <ComputerScreen />
        </Html> */}
    </Clone>;
}

useGLTF.preload('./models/Computer.glb');
