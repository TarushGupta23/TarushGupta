import { useGLTF } from '@react-three/drei';

export default function Iphone() {
    const model = useGLTF('./models/Iphone.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/iPhone.glb');
