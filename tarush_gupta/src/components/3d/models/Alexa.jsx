import { Clone, useGLTF } from '@react-three/drei';
import Icon from '../Icon';


export default function Alexa({idx, setIdx}) {
    const model = useGLTF('./models/Alexa.glb');
    
    return <Clone object={model.scene} 
        position={[0, 4.6, 0]}
        // position={[-.5, 4.6, .5]}
    >
        <Icon idx={idx} icon='testimonial' setIdx={() => setIdx(7)} 
            // position={[-6.23, -3.95, 3.05]} 
            position={[-6.73, -3.95, 3.55]} 
        />
    </Clone>;
}

useGLTF.preload('./models/Alexa.glb');
