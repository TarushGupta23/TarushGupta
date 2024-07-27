import Computer from './models/Computer'
import Alexa from './models/Alexa'
import Iphone from './models/Iphone'
import Cup from './models/Cup'
import Table from './models/Table'
import Books from './models/Books'
import Letter from './models/Letter'
import Calander from './models/Calander'
import Trophies from './models/Trophies'
import Resume from './models/Resume'
import Drone from './models/Drone'

export default function Model({cameraIndex, setCameraIndex, docLocation}) {
    return <>
        <Computer idx={cameraIndex} setIdx={setCameraIndex} />
        <Alexa idx={cameraIndex} setIdx={setCameraIndex} />
        <Iphone idx={cameraIndex} setIdx={setCameraIndex} />
        <Cup idx={cameraIndex} setIdx={setCameraIndex} />
        <Table />
        <Books />
        <Letter idx={cameraIndex}setIdx={setCameraIndex} />
        <Calander idx={cameraIndex} setIdx={setCameraIndex} />
        <Trophies idx={cameraIndex} setIdx={setCameraIndex} />
        <Resume idx={cameraIndex} setIdx={setCameraIndex} docLocation={docLocation} />
        <Drone idx={cameraIndex}setIdx={setCameraIndex} />
    </>
}