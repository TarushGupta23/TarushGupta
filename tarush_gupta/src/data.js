import { Vector3 } from "three";

export default function getFov(focalLen) {
    const sensorHeight = 24;
    return 2 * Math.atan((sensorHeight / 2) / focalLen) * (180 / Math.PI);
}

const currentDisplacement = 4.6;
const displacementToGround = 8.6;

// NOTE : fov is focal length here!!
const path = [{ 
    // cupView - https://www.flaticon.com/free-icon-font/mug-hot-alt_6349334?term=cup&related_id=6349334
        position: [4.605, -3.2 + currentDisplacement, 9.45], 
        rotation: [-0.1, 0, 0], 
        fov: 33.08593750000001
    }, { 
    // resume - https://www.flaticon.com/free-icon-font/resume_16542662?page=1&position=2&term=resume&origin=search&related_id=16542662
        position: [-0.415, -2.27 + currentDisplacement, 6.74], 
        rotation: [0, .65, 0], 
        fov: 25.73350694444444
    }, { 
    // laptop - https://www.flaticon.com/free-icon/pc_556813?term=computer&page=1&position=64&origin=tag&related_id=556813
        position: [1.935, -.73 + currentDisplacement, 14.82], 
        rotation: [-.06, -.05, 0], 
        fov: 36.76215277777778
    }, { 
    // phone - https://www.flaticon.com/free-icon-font/mobile-notch_8034760?page=1&position=7&term=phone&origin=search&related_id=8034760
        position: [4.205, -2.497 + 4.6, 4.74], 
        rotation: [0, -.4, 0], 
        fov: 11.02864583333333
    }, { 
    // calender - https://www.flaticon.com/free-icon-font/calendar-day_9586178?page=1&position=2&term=calender&origin=search&related_id=9586178
        position: [-1.055, 4.6-2.59, 6.22], 
        rotation: [-.07, .66, .06], 
        fov: 36.76215277777778
    }, { 
    // trophies - https://www.flaticon.com/free-icon-font/trophy_3915001?page=1&position=19&term=trophy&origin=search&related_id=3915001
        position: [2.675, 4.6-2.53, -0.59], 
        rotation: [0, -1.60, 0], 
        fov: 18.38107638888889
    }, { 
    // alexa - https://www.flaticon.com/free-icon-font/skill-user_15399295?term=chat&related_id=15399295
        position: [-10.025, 4.6-2.63, 6.97], 
        rotation: [-.10, -.74, -.11], 
        fov: 29.40972222222222
    }, { 
    // letter - https://www.flaticon.com/free-icon-font/envelope_3916632?page=1&position=3&term=mail&origin=search&related_id=3916632
        position: [.025, 4.6+.4, 3.20], 
        rotation: [-1.57, 0, -.1], 
        fov: 36.76215277777778
    }, { 
    // mainPos - https://www.flaticon.com/free-icon-font/house-chimney_9243863?page=1&position=13&term=home&origin=search&related_id=9243863
        position: [-0.35, 13 + 4.6, 52.7], 
        rotation: [-.33, 0, 0], 
        fov: 36.76215277777778
    }, 
]
const cameraPath = path.map(obj => {
    return {
        position: new Vector3().fromArray(obj.position),
        rotation: new Vector3().fromArray(obj.rotation),
        fov: obj.fov
    }
})
export {
    cameraPath, 
    displacementToGround, 
    currentDisplacement
}