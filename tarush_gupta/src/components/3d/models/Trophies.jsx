import { useGLTF } from '@react-three/drei';

export default function Trophies() {
    const model = useGLTF('./models/Trophies2.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Trophies2.glb');
