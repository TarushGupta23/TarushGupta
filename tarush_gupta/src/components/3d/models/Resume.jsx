import { Clone, useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { LoopOnce, SRGBColorSpace, Vector3 } from 'three';
import Icon from '../Icon';
import { useEffect, useRef } from 'react';

const focusPosition = new Vector3(-3.62, 2.08, 2.51); // position of mesh.scene
const focusRotation = new Vector3(1, -0.38, -0.8); // rotation of mesh.scene.children[0]

const initialPosition = new Vector3(-3.15, 0.42, 2.51);
const initialRotation = new Vector3(0, 0, 0);

const currRotation = new Vector3(0, 0, 0);


export default function Resume({ idx, setIdx, docLocation }) {
    const model = useGLTF('./models/ResumeAnimation.glb');
    model.scene.position.set(-3.15, 0.42, 2.51)

    const [resume, cvv] = useTexture(['./docs/resume.jpg', './docs/cvv.jpg'])
    resume.center.set(0.5, 0.5)
    resume.repeat.y = -1
    resume.colorSpace = SRGBColorSpace
    
    cvv.center.set(0.5, 0.5)
    cvv.repeat.y = -1
    cvv.colorSpace = SRGBColorSpace

    const clone = useRef()
    const animation = useAnimations(model.animations, clone.current)

    const handleMaterialChange = () => {
        const material1 = clone.current.children[1].material
        const material2 = clone.current.children[2].material

        if (material1 && material2) {
            if (docLocation === 1) {
                material1.map = resume
                material1.needsUpdate = true
                
                material2.map = cvv
                material2.needsUpdate = true
            } else {
                material1.map = cvv
                material1.needsUpdate = true
                
                material2.map = resume
                material2.needsUpdate = true
            }
        }
    }

    useEffect(() => {
        if (clone.current)
            handleMaterialChange()
    }, [clone.current])

    useEffect(() => {
        const action1 = animation.actions['action1']
        const action2 = animation.actions['action2']
        const action3 = animation.actions['action3']
        const timeScale = 3

        if (action1 && action2 && action3) {
            setTimeout(() => {
                handleMaterialChange()
            }, action1.getClip().duration*1000/timeScale);
            action1.timeScale = timeScale
            action2.timeScale = timeScale
            action3.timeScale = timeScale
            action1.setLoop(LoopOnce, 1).reset().play();
            action2.setLoop(LoopOnce, 1).reset().play();
            action3.setLoop(LoopOnce, 1).reset().play();
        }
    }, [docLocation])
    
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

useGLTF.preload('./models/ResumeAnimation.glb');
