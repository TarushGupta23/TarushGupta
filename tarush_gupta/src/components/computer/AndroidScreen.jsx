import { androidProjects } from '../../data'
import './androidScreen.css'

export default function AndroidScreen({ idx }) {
    return idx === 4 ?
    <section id="androidScreen">
        <ul>
            {
                androidProjects.map((project) => {
                    return <li key={project.liId} id={project.liId} className='invisible'>
                        <img src={`./androidProjects/${project.liId}/1.png`} alt="" />
                    </li>
                })
            }
        </ul>
    </section>
    : <></>
}