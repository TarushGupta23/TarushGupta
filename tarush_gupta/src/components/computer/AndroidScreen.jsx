import { androidProjects } from '../../data'
import './androidScreen.css'

export default function AndroidScreen({ idx }) {
    return idx === 4 ?
    <section id="androidScreen">
        <ul className='item-ul'>
            {
                androidProjects.map((project) => {
                    return <li key={project.liId} id={project.liId} className='invisible proj-item'>
                        <ul className={`imgs-${project.liId} proj-img-ul`}>
                            {
                                [...Array(project.imgs)].map((_, index) => {
                                    return <img key={index} className='proj-img active' src={`./androidProjects/${project.liId}/${index+1}.png`} alt="" id={index+1} />
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