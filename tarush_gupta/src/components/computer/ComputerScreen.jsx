import { webProjects } from '../../data'
import './computerScreen.css'

export default function ComputerScreen({ idx }) {
    return idx === 3 ?
    <section id="computerScreen">
        <ul className='item-ul'>
            {
                webProjects.map((project) => {
                    return <li key={project.liId} id={project.liId} className='invisible proj-item'>
                        <ul className={`imgs-${project.liId} proj-img-ul`}>
                            {
                                [...Array(project.imgs)].map((_, index) => {
                                    return <img key={index} className='proj-img active' src={`./webProjects/${project.liId}/${index+1}.png`} alt="" id={index+1} />
                                })
                            }
                        </ul>
                    </li>
                })
            }
        </ul>
    </section>
    : <></>
}