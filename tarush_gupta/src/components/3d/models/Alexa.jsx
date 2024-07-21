import { useGLTF } from '@react-three/drei';

export default function Alexa() {
    const model = useGLTF('./models/Alexa.glb');
    return <primitive object={model.scene} position={[-.5, 4.6, .5]} />;
}

useGLTF.preload('./models/Alexa.glb');
