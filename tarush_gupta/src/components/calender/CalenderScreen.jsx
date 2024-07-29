import './calenderScreen.css'
import { events } from "../../data";

export default function CalenderScreen({ calenderLoc, idx }) {
    return idx=== 5 ?
        <section id="calenderScreen">
            <ul>
                {
                    events.map((data, index) => {
                        return <li className={index === calenderLoc? 'calenderPage visible' : 'calenderPage invisible'}>
                            <strong className="calenderTitle">{data.title}</strong>
                            <div className="calenderContent">
                                <span className="calenderStart date">{data.start}</span>
                                <span className="calenderEnd date">{data.end}</span>
                                {data.content}
                            </div>
                        </li>
                    })
                }
            </ul>
        </section>
        : <></>
}