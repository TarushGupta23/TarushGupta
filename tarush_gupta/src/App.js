import { Suspense, useEffect, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Table from './models/Table';
import Computer from './models/Computer';
import Alexa from './models/Alexa';
import Books from './models/Books';
import Calander from './models/Calander';
import Letter from './models/Letter';
import Iphone from './models/Iphone';
import Cup from './models/Cup';
import Trophies from './models/Trophies';
import Resume from './models/Resume';
import Loader from './components/loader/Loader';

const array = [
    {position: [4.605, -2.55 + 4.6, 9.45], rotation: [-.16, .03, 0], focalLen: 45}, // cupView - https://www.flaticon.com/free-icon-font/mug-hot-alt_6349334?term=cup&related_id=6349334
    {position: [-0.415, -2.27 + 4.6, 6.74], rotation: [0, .65, 0], focalLen: 35}, // resume - https://www.flaticon.com/free-icon-font/resume_16542662?page=1&position=2&term=resume&origin=search&related_id=16542662
    {position: [1.935, 4.6-.73, 14.82], rotation: [.06, -.05, 0], focalLen: 50}, // laptop - https://www.flaticon.com/free-icon/pc_556813?term=computer&page=1&position=64&origin=tag&related_id=556813
    {position: [4.205, -2.497 + 4.6, 4.74], rotation: [0, -.4, 0], focalLen: 15}, // phone - https://www.flaticon.com/free-icon-font/mobile-notch_8034760?page=1&position=7&term=phone&origin=search&related_id=8034760
    {position: [-1.055, 4.6-2.59, 6.22], rotation: [-.07, .66, .06], focalLen: 50}, // calender - https://www.flaticon.com/free-icon-font/calendar-day_9586178?page=1&position=2&term=calender&origin=search&related_id=9586178
    {position: [2.675, 4.6-2.53, -0.59], rotation: [0, -1.60, 0], focalLen: 25}, // trophies - https://www.flaticon.com/free-icon-font/trophy_3915001?page=1&position=19&term=trophy&origin=search&related_id=3915001
    {position: [-10.025, 4.6-2.63, 6.97], rotation: [-.10, -.74, -.11], focalLen: 40}, // alexa - https://www.flaticon.com/free-icon-font/skill-user_15399295?term=chat&related_id=15399295
    {position: [.025, 4.6+.4, 3.20], rotation: [-1.57, 0, -.1], focalLen: 50}, // letter - https://www.flaticon.com/free-icon-font/envelope_3916632?page=1&position=3&term=mail&origin=search&related_id=3916632
    {position: [-0.35, 13 + 4.6, 52.7], rotation: [-.33, 0, 0], focalLen: 50}, // mainPos - https://www.flaticon.com/free-icon-font/house-chimney_9243863?page=1&position=13&term=home&origin=search&related_id=9243863
]

function App() {
    const [currPos, setCurrPos] = useState(array.length-1)
    const focalLength = array[currPos].focalLen;
    const sensorHeight = 24;
    const fov = 2 * Math.atan((sensorHeight / 2) / focalLength) * (180 / Math.PI);
    

  return ( <>
    <Canvas>
        <group>
            <PerspectiveCamera 
                makeDefault 
                rotation={array[currPos].rotation}
                fov={fov}
                position={array[currPos].position}
            />
        </group>
      {/* <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI/2}
        // enabled={false}
      /> */}
      <ambientLight intensity={4.5} />
      <directionalLight intensity={4.5} position={[0, 13, 52.7]}/>
      <directionalLight intensity={4.5} position={[0, 13, -52.7]}/>

      <Suspense fallback={null} >
        <Computer />
        <Alexa />
        <Iphone />
        <Cup />
        <Table />
        <Books />
        <Letter />
        <Calander />
        <Trophies />
        <Resume />
      </Suspense>
      
      <Loader />
    </Canvas>
    </>
  );
}

export default App;
