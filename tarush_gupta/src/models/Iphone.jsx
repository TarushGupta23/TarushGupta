import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

const focusRotation = [1.57, 0, .3];
const focusPosition = [0, 1.5+4.6, 0];

export default function Iphone() {
    const model = useGLTF('./models/Iphone.glb');
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/iPhone.glb');
