import { Clone, Html, useGLTF } from '@react-three/drei';
import LetterHtml from '../../letter/letterHtml';
import Icon from '../Icon';

export default function Letter({ idx, setIdx }) {
    const model = useGLTF('./models/Letter.glb');

    return <Clone object={model.scene} position-y={4.6}> 
        <Icon idx={idx} icon='mail' position={[0.04, -4.14, 3.34]} setIdx={() => setIdx(8)} />

        <Html center transform distanceFactor={2}
            position={[0, -4.078962326049805, 3.1920855045318604]}
            rotation={[-Math.PI/2, 0, -.16]}
        >
            <LetterHtml idx={idx}/>
        </Html>
    </Clone>;
}

useGLTF.preload('./models/Letter.glb');
