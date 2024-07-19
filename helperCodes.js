// const tableRef = useRef();
    // const [position, setPosition] = useState([0, 0, 0]);

    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //         if (event.key === 'w') {
    //             console.log('triggered btn w')
    //             setPosition(prevPosition => [prevPosition[0], prevPosition[1] + 0.1, prevPosition[2]]);
    //         } else if (event.key === 's') {
    //             console.log('triggered btn s')
    //             setPosition(prevPosition => [prevPosition[0], prevPosition[1] - 0.1, prevPosition[2]]);
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);

    // ---------------------------------------------

    // const model = useGLTF('./models/Iphone.glb');
    // const {a, b, c} = useControls('resume', {
    //     a: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
    //     b: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
    //     c: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
    // })
    // model.scene.children[0].rotation.set(a, b, c)

    // ---------------------------------------------
//     import { Suspense } from 'react';
// import './App.css';
// import { Canvas } from '@react-three/fiber'
// import { Loader, OrbitControls } from '@react-three/drei';
// import Table from './models/Table';
// import Computer from './models/Computer';
// import Alexa from './models/Alexa';
// import Books from './models/Books';
// import Calander from './models/Calander';
// import Letter from './models/Letter';
// import Iphone from './models/Iphone';
// import Cup from './models/Cup';
// import Trophies from './models/Trophies';
// import Resume from './models/Resume';

// const container = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#282c34',
//   };
  
//   const inner = {
//     width: '100%',
//     maxWidth: '300px',
//     textAlign: 'center',
//   };
  
//   const bar = {
//     height: '4px',
//     backgroundColor: '#61dafb',
//     margin: '20px 0',
//     borderRadius: '2px',
//   };
  
//   const data = {
//     color: '#61dafb',
//     fontSize: '16px',
//   };
  
//   const iconsContainer = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     marginTop: '20px',
//     position: 'absolute',
//     bottom: '20px',
//     width: '100%',
//     maxWidth: '300px',
//     position: 'absolute',
//     z_index: '1000'
//   };
  
//   const icon = {
//     width: '50px',
//     height: '50px',
//     animation: 'spin 2s linear infinite',
//   };

// function App() {
//   const focalLength = 50;
//   const sensorHeight = 24;
//   const fov = 2 * Math.atan((sensorHeight / 2) / focalLength) * (180 / Math.PI);

//   return ( <>
//     <Canvas
//       camera={{
//         position: [0, 13, 52.7],
//         fov: fov
//       }}
//     >
//       <OrbitControls 
//         enableZoom={false} 
//         enablePan={false}
//         minPolarAngle={0}
//         maxPolarAngle={Math.PI/2}
//         // enabled={false}
//       />
//       <ambientLight intensity={4.5} />
//       {/* <directionalLight intensity={4.5} position={[0, 13, 52.7]}/>
//       <directionalLight intensity={4.5} position={[0, 13, -52.7]}/> */}

//       <Suspense fallback={null} >
//         <Table />
//         <Computer />
//         <Alexa />
//         <Books />
//         <Iphone />
//         <Letter />
//         <Calander />
//         <Cup />
//         <Trophies />
//         <Resume />
//       </Suspense>
//     </Canvas>
//     <Loader
//         containerStyles={container}
//         innerStyles={inner}
//         barStyles={bar}
//         dataStyles={data}
//         dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
//         initialState={(active) => active}
//       />
//       <div style={iconsContainer}>
//         <img src="/icons/icon1.png" alt="icon1" style={icon} />
//         <img src="/icons/icon2.png" alt="icon2" style={icon} />
//         <img src="/icons/icon3.png" alt="icon3" style={icon} />
//         <img src="/icons/icon4.png" alt="icon4" style={icon} />
//       </div>
//     </>
//   );
// }

// export default App;
