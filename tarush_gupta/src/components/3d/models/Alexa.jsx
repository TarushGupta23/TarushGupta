import { useGLTF } from '@react-three/drei';
import Icon from '../Icon';


export default function Alexa({idx}) {
    const model = useGLTF('./models/Alexa.glb');
    return <primitive object={model.scene} position={[-.5, 4.6, .5]}>
        <Icon idx={idx} icon='testimonial' position={[-6.23, -3.95, 3.05]} />
    </primitive>;
}

useGLTF.preload('./models/Alexa.glb');
