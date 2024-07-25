import { Clone, useGLTF } from '@react-three/drei';

export default function Books() {
    const model = useGLTF('./models/Books.glb');
    return <Clone object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Books.glb');
