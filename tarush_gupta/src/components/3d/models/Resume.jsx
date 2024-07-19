import { useGLTF } from '@react-three/drei';

export default function Resume() {
    const model = useGLTF('./models/Resume.glb');
    return <primitive object={model.scene} position-y={4.6}  />;
}

useGLTF.preload('./models/Resume.glb');
