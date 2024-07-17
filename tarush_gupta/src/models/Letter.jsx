import { useGLTF } from '@react-three/drei';

export default function Letter() {
    const model = useGLTF('./models/Letter.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Letter.glb');
