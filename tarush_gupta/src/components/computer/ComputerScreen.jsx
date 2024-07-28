import { webProjects } from '../../data'
import './computerScreen.css'

export default function ComputerScreen({ idx }) {
    return idx === 3 ?
    <section id="computerScreen">
        <ul>
            {
                webProjects.map((project) => {
                    return <li key={project.liId} id={project.liId} className='invisible'>
                        <img src={`./webProjects/${project.liId}/1.png`} alt="" />
                    </li>
                })
            }
        </ul>
    </section>
    : <></>
}