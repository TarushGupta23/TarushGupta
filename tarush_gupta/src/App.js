import { Suspense, useRef, useState, useEffect } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Table from './models/Table';
import { DoubleSide } from 'three';
import Computer from './models/Computer';
import Alexa from './models/Alexa';
import Books from './models/Books';
import Calander from './models/Calander';
import Letter from './models/Letter';
import Iphone from './models/Iphone';

function App() {
  const focalLength = 50;
  const sensorHeight = 24;
  const fov = 2 * Math.atan((sensorHeight / 2) / focalLength) * (180 / Math.PI);

  return (
    <Canvas
      camera={{
        position: [0, 13, 52.7],
        fov: fov
      }}
    >
      <OrbitControls />
      <ambientLight intensity={4.5} />

      <mesh scale={10} rotation-x={-Math.PI/2}>
        <planeGeometry />
        <meshBasicMaterial color={'red'} side={DoubleSide}/>
      </mesh>

      <Suspense fallback={
        <mesh>
          <boxGeometry />
          <meshBasicMaterial wireframe/>
        </mesh>
      } >
        <Table />
        <Computer />
        <Alexa />
        <Books />
        <Iphone />
        <Letter />
        <Calander />
      </Suspense>
    </Canvas>
  );
}

export default App;
