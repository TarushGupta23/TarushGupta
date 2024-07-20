import { useGLTF } from '@react-three/drei';

export default function Cup() {
    const model = useGLTF('./models/Cup.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Cup.glb');
