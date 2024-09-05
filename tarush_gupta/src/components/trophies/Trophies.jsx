import { achievements } from '../../data'
import './trophies.css'

export default function Trophies({ idx }) {
    return <div className={idx===6? "trophiesContainer" : "trophiesContainer hidden"}>
        <h2 className="title"> Achievements and <br />Positions of Responsibility </h2>
        <div className="trophiesWrapper">
            <ul>
            {
                achievements.map((item, index) => {
                    return <li className='achievement-item'>
                        <span>{index+1}</span>
                        <h3>{item.title}</h3>
                        <p className='desc'>{item.desc}</p>
                    </li>
                })
            }
            </ul>
        </div>
    </div>
}