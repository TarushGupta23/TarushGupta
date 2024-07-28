import { events } from "../../data"
import './calender.css'

export default function CalenderHtml({ idx, eventLoc, setEventLoc }) {
    return <div className={idx === 5?"calenderContainer":"calenderContainer hidden"}>
        <div className={"navigation"}>
            {[...Array(events.length)].map((_, index) => {
                return <span key={index} className={eventLoc === index ? "active" : ""} onClick={() => setEventLoc(index)} />
            })}
        </div>
    </div>
}