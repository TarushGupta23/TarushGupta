import { useGLTF } from '@react-three/drei';

export default function Computer() {
    const model = useGLTF('./models/Computer.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Computer.glb');
