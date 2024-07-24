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

export default function Model({cameraIndex}) {
    return <>
        <Computer idx={cameraIndex} />
        <Alexa idx={cameraIndex} />
        <Iphone idx={cameraIndex} />
        <Cup idx={cameraIndex} />
        <Table idx={cameraIndex} />
        <Books idx={cameraIndex} />
        <Letter idx={cameraIndex}/>
        <Calander idx={cameraIndex} />
        <Trophies idx={cameraIndex} />
        <Resume idx={cameraIndex} />
        <Drone idx={cameraIndex}/>
    </>
}