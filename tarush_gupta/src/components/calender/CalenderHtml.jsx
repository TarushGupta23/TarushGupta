import { useEffect } from "react"
import { events } from "../../data"
import './calender.css'

export default function CalenderHtml({ idx, eventLoc, setEventLoc }) {

    useEffect(() => {
        events.forEach((item) => {
            const elem = document.getElementById("ipad-img-" + item.img)
            elem && elem.classList.remove('active')
        })
        
        setTimeout(() => {
            const elem = document.getElementById("ipad-img-" + events[eventLoc].img)
            elem && elem.classList.add('active')
        }, 100)

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
            <div className="btn b1" onClick={() => setEventLoc(i => ((i-1+events.length)%events.length) )}>&lt;</div>
            {[...Array(events.length)].map((_, index) => {
                return <span key={index} className={eventLoc === index ? "active" : ""} />
            })}
            <div className="btn b2" onClick={() => setEventLoc(i => ((i+1)%events.length) )}>&gt;</div>
        </div>
    </div>
}