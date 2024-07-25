import { Clone, useGLTF } from '@react-three/drei';
import Icon from '../Icon';


export default function Alexa({idx, setIdx}) {
    const model = useGLTF('./models/Alexa.glb');
    
    return <Clone object={model.scene} position={[-.5, 4.6, .5]}>
        <Icon idx={idx} icon='testimonial' position={[-6.23, -3.95, 3.05]} setIdx={() => setIdx(7)} />
    </Clone>;
}

useGLTF.preload('./models/Alexa.glb');
