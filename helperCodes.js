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

const moveAllAbove = 8.6
const moveAppearent = 4.6

// ---------------------------------------------
// const model = useGLTF('./models/Iphone.glb');
// const {a, b, c} = useControls('resume', {
//     a: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
//     b: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
//     c: {value: 0, min: -Math.PI*2, max: 2*Math.PI, step: .01},
// })
// model.scene.children[0].rotation.set(a, b, c)