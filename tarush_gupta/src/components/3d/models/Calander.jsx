import { useGLTF } from '@react-three/drei';

export default function Calander() {
    const model = useGLTF('./models/CalanderAnimation.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/CalanderAnimation.glb');
