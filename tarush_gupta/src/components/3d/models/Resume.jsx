import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import Icon from '../Icon';

const focusPosition = new Vector3(0, 4.6, 0); // position of mesh.scene
const focusRotation = new Vector3(0, 0, 0); // rotation of mesh.scene.children[0]

const initialPosition = new Vector3(0, 4.6, 0);
const initialRotation = new Vector3(0, 0, 0);

const currRotation = new Vector3(0, 0, 0);

// export default function Iphone({idx}) {
//     const model = useGLTF('./models/Iphone.glb');

//     useFrame(() => {
//         if (idx === 4) {
//             model.scene.position.lerp(focusPosition, .1);
//             currRotation.lerp(focusRotation, .1);
//             model.scene.children[0].rotation.setFromVector3(currRotation);
//         } else {
//             model.scene.position.lerp(initialPosition, .1);
//             currRotation.lerp(initialRotation, .1);
//             model.scene.children[0].rotation.setFromVector3(currRotation);
//         }
//     })
    
//     return <primitive 
//         object={model.scene} 
//         position={[0, 4.6, 0]}
//     />;
// }

// useGLTF.preload('./models/iPhone.glb');

export default function Resume({ idx }) {
    const model = useGLTF('./models/ResumeAnimation.glb');
    // console.log(model.scene)

    // const {x, y, z, a, b, c} = useControls('', {
    //     x: {value: 0, min: -100, max: 100, step: 0.01},
    //     y: {value: 0, min: -100, max: 30, step: 0.01},
    //     z: {value: 0, min: -100, max: 30, step: 0.01},
    //     a: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01},
    //     b: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01},
    //     c: {value: 0, min: -2*Math.PI, max: +2*Math.PI, step: 0.01}
    // })

    return <primitive object={model.scene} 
        position-y={4.6} 
        // position={[x, y, z]}
        // rotation={[a, b, c]}
    >
        <Icon idx={idx} icon='resume' position={[-3.17, -4.28, 3.06]} />
    </primitive>;
}

// useGLTF.preload('./models/ResumeAnimation.glb');
useGLTF.preload('./models/ResuumeAnimation.glb');
