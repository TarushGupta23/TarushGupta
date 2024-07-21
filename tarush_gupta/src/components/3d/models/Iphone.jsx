import { meshBounds, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Vector3 } from 'three';

const focusPosition = new Vector3(0, 1.31+4.6, 0); // position of mesh.scene
const focusRotation = new Vector3(1.57, 0, .3); // rotation of mesh.scene.children[0]

const initialPosition = new Vector3(0, 4.6, 0);
const initialRotation = new Vector3(0, -0.5631152869464902, 0);
// 3.141592653589793
const currRotation = new Vector3(0, -0.5631152869464902, 0);

export default function Iphone({idx}) {
    const model = useGLTF('./models/Iphone.glb');

    useFrame(() => {
        if (idx === 3) {
            model.scene.position.lerp(focusPosition, .1);
            currRotation.lerp(focusRotation, .1);
            model.scene.children[0].rotation.setFromVector3(currRotation);
        } else {
            model.scene.position.lerp(initialPosition, .1);
            currRotation.lerp(initialRotation, .1);
            model.scene.children[0].rotation.setFromVector3(currRotation);
        }
    })
    
    return <primitive 
        object={model.scene} 
        position={[0, 4.6, 0]}
    />;
}

useGLTF.preload('./models/iPhone.glb');
