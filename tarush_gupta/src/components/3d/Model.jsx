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
        <Computer />
        <Alexa />
        <Iphone idx={cameraIndex}/>
        <Cup />
        <Table />
        <Books />
        <Letter />
        <Calander />
        <Trophies />
        <Resume />
        <Drone idx={cameraIndex}/>
    </>
}