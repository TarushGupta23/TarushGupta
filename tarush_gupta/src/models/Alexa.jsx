import { useGLTF } from '@react-three/drei';

export default function Alexa() {
    const model = useGLTF('./models/Alexa.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Alexa.glb');
