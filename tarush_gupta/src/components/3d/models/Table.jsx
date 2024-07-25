import { Clone, useGLTF, useTexture } from '@react-three/drei';
import { DoubleSide, SRGBColorSpace } from 'three';
import { useControls } from 'leva'

export default function Table() {
    const model = useGLTF('./models/Table.glb');
    const [floorAlpha, carpetAlpha, floor, carpet] = useTexture(['./textures/floorAlpha.jpg', './textures/carpetAlpha.jpg', './textures/floor.jpg', './textures/carpet.jpeg']);
    floor.colorSpace = SRGBColorSpace
    carpet.colorSpace = SRGBColorSpace

    return <Clone object={model.scene} position-y={4.6}>
        <mesh position-y={-8.45} rotation-x={Math.PI/2} scale={50}>
            <planeGeometry />
            <meshBasicMaterial side={DoubleSide} map={floor} alphaMap={floorAlpha} transparent={true} />
        </mesh>
        <mesh position-y={-8.44} rotation-x={-Math.PI/2} scale={18}>
            <planeGeometry />
            <meshBasicMaterial map={carpet} alphaMap={carpetAlpha} transparent={true} />
        </mesh>
    </Clone>;
}

useGLTF.preload('./models/Table.glb');
