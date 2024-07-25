import { Clone, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import Icon from '../Icon';
import { useControls } from 'leva'
import { useRef } from 'react';

const focusPosition = new Vector3(-3.62, 2.08, 2.51); // position of mesh.scene
const focusRotation = new Vector3(0.98, -0.38, -0.81); // rotation of mesh.scene.children[0]

const initialPosition = new Vector3(-3.15, 0.42, 2.51);
const initialRotation = new Vector3(0, 0, 0);

const currRotation = new Vector3(0, 0, 0);


export default function Resume({ idx, setIdx }) {
    const model = useGLTF('./models/ResumeAnimation.glb');
    model.scene.position.set(-3.15, 0.42, 2.51)
    model.scene.children[0].position.set(0, 0, 0)
    model.scene.children[1].position.set(0, 0, 0)
    model.scene.children[2].position.set(0, 0, 0)

    const clone = useRef()
    
    useFrame(() => {
        if (idx === 2) {
            clone.current.position.lerp(focusPosition, .1);
            currRotation.lerp(focusRotation, .1);
            clone.current.rotation.setFromVector3(currRotation);
        } else {
            clone.current.position.lerp(initialPosition, .1);
            currRotation.lerp(initialRotation, .1);
            clone.current.rotation.setFromVector3(currRotation);
        }
    })

    return <Clone object={model.scene} ref={clone}>
        <Icon idx={idx} icon='resume' position={[0, 0, 0]} setIdx={() => setIdx(2)} />
    </Clone>;
}

useGLTF.preload('./models/ResuumeAnimation.glb');
