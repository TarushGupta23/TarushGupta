import { useEffect, useState } from 'react'
import './alexa.css'
import { testimonials as list } from '../../data'

export default function AlexaHtml({ idx }) {
    const [speechIdx, setSpeechIdx] = useState(0)

    useEffect(() => {
        let timeoutId;
        if (idx === 7 && list.length != 1) {
            timeoutId = setTimeout(() => {
                const newIdx = (speechIdx+1)%(list.length);
                setSpeechIdx(newIdx)
            }, 4000)
        }
        return () => { clearTimeout(timeoutId) }
    }, [speechIdx, idx])

    return <div className={idx===7?"alexaContainer":"alexaContainer hidden"}>
        {
            list.map((speech, index) => {
                const isHidden = idx === 7 && index === speechIdx ? 'active' : 'hidden';
                const position = index%2 == 0 ? 'left' : 'right';
                return <div className={`${isHidden} ${position} speechBox`} key={index}>
                    <div className="imageCover">
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div className="speech">
                            <span className="icon"></span>
                            {speech.text}
                        </div>
                        <div className="data">
                            <strong>{speech.by}</strong>
                            <span>{speech.position}</span>
                        </div>
                    </div>
                    <div className="tail"></div>
                </div>
            })
        }
        {
            list.length != 1 && 
            <div className={idx===7? "navigation" : "hidden navigation"}>
                {
                    [...Array(list.length)].map((_, index) => (<span key={index} className={speechIdx === index ? "active" : ""} onClick={() => setSpeechIdx(index)} />))
                }
            </div>
        }
    </div>
}