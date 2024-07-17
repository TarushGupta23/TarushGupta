import { useGLTF } from '@react-three/drei';

export default function Table() {
    const model = useGLTF('./models/Table.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Table.glb');
