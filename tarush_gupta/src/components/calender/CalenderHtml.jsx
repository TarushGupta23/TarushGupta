import { useState } from "react"
import { events } from "../../data"
import './calender.css'

export default function CalenderHtml({ idx }) {
    const [eventIdx, setEventIdx] = useState(0);
    return <div className={idx === 5?"calenderContainer":"calenderContainer hidden"}>
        <div className={"navigation"}>
            {[...Array(events.length)].map((_, index) => {
                return <span key={index} className={eventIdx === index ? "active" : ""} onClick={() => setEventIdx(index)} />
            })}
        </div>
    </div>
}