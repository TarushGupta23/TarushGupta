import { useGLTF, useTexture } from '@react-three/drei';

export default function Table() {
    const model = useGLTF('./models/Table.glb');
    const texture = useTexture('./textures/alpha.jpg');
    const mesh = model.scene.children[2].children[0];
    mesh.material.alphaMap = texture; 
    mesh.material.transparent = true; 
    return <primitive object={model.scene} position-y={4.6} />;
}

useGLTF.preload('./models/Table.glb');
