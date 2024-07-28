import { Html } from '@react-three/drei'
import './icon.css'

export default function Icon({idx, icon, position, setIdx}) {
    // idx is current index
    return <Html center position={position}>
        <div className={idx===0? 'visible':'hidden'} id="modelIcon" onClick={() => setIdx()}>
            <div style={{'--mask-image': `url(./../../../icons/navigation/${icon}.png)`}} />
        </div>
    </Html>
}