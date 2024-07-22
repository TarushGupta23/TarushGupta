import { Html, useGLTF } from '@react-three/drei';
import './letter.css'

export default function Letter() {
    const model = useGLTF('./models/Letter.glb');

    return <primitive object={model.scene} position-y={4.6}> 
        <Html
            center
            transform
            position={[0, -4.078962326049805, 3.1920855045318604]}
            rotation={[-Math.PI/2, 0, -.16]}
            distanceFactor={2}
        >
            <section className={`letterContainer`} id='letterContainer'>
                <strong>Let's have a talk</strong>
                <form action="">
                    <div className="email"><input type="mail" placeholder='Email'/></div>
                    <div className="name"><input type="text" placeholder='Name'/></div>
                    <div className="message"><textarea name="" id="" placeholder='Message'></textarea></div>
                    <button>send</button>
                </form>
                <div>To: <i>tarush23.gupta@gmail.com</i></div>
            </section>
        </Html>
    </primitive>;
}

useGLTF.preload('./models/Letter.glb');
