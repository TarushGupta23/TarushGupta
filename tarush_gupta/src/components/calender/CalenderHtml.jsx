import { useEffect } from "react"
import { events } from "../../data"
import './calender.css'

export default function CalenderHtml({ idx, eventLoc, setEventLoc }) {
    useEffect(() => {
        let intervalId;
        if (idx === 5) {
            intervalId = setInterval(() => {
                let i = (eventLoc+1) % events.length;
                setEventLoc(i)
            }, 6000)
        }
        return () => { intervalId && clearInterval(intervalId) }
    }, [idx, eventLoc])
    return <div className={idx === 5?"calenderContainer":"calenderContainer hidden"}>
        <div className={"navigation"}>
            {[...Array(events.length)].map((_, index) => {
                return <span key={index} className={eventLoc === index ? "active" : ""} onClick={() => setEventLoc(index)} />
            })}
        </div>
    </div>
}