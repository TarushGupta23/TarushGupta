import { Vector3 } from "three";

// NOTE : fov is focal length here!!

const homeCamera = [-0.35, 13 + 4.6, 52.7]
function shiftCenter(pos) {
    return new Vector3(pos[0] - homeCamera[0], pos[1] - homeCamera[1], pos[2] - homeCamera[2])
}
const rawPath = [
    {  // mainPos - 0
        position: [-0.35, 13 + 4.6, 52.7], 
        rotation: [-.33, 0, 0]
    }, { // cupView - 1
        position: [4.605, -3.2 + 4.6, 9.45], 
        rotation: [-0.1, 0, 0], 
    }, { // resume - 2
        position: [-0.415, -2.27 + 4.6, 6.74], 
        rotation: [0, .65, 0], 
    }, { // laptop - 3
        position: [1.4, -1.7 + 4.6, 11.82], 
        rotation: [-0.035, -0.08, 0]
    }, { // phone - 4
        position: [3.205, -2.75 + 4.6, 6.74], 
        rotation: [0, -.4, 0], 
    }, { // calender - 5
        position: [-1.055, 4.6-2.59, 6.22], 
        rotation: [-.07, .66, .06]
    }, { // trophies - 6
        position: [-.45, 2.97, -2.4], 
        rotation: [-.75, -1.43, -.79], 
    }, { // alexa - 7
        position: [-10.025, 4.6-2.63, 6.97], 
        rotation: [-.22, -.74, -.11], 
    }, { // letter - 8
        position: [.025, 4.6+.4, 3.20], 
        rotation: [-1.57, 0, -.1]
    }, { // credit pos - 9
        position: [7.06, 14.66, 6.5], 
        rotation: [.1, 0.87, -.14]
    } 
]
const dataLen = rawPath.length
const cameraPath = rawPath.map(obj => {
    return {
        position: shiftCenter(obj.position),
        rotation: new Vector3().fromArray(obj.rotation),
    }
})
export { dataLen, cameraPath }