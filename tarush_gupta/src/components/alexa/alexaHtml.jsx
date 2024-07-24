import { useEffect, useState } from 'react'
import './alexa.css'

export default function AlexaHtml({ idx }) {
    const [speechIdx, setSpeechIdx] = useState(0)
    const list = [
        { by: 'DP tripathi', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` },
        { by: 'Tarush Gupta', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` },
        { by: 'ABC', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` },
        { by: 'xYZ', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` },
        { by: 'hi hi hi', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` },
        { by: 'ha', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` }
    ]

    useEffect(() => {
        let timeoutId;
        if (idx === 7) {
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
        <div className={idx===7? "navigation" : "hidden navigation"}>
            {[...Array(list.length)].map((_, index) => {
                return <span key={index} className={speechIdx === index ? "active" : ""} onClick={() => setSpeechIdx(index)} />
            })}
        </div>
    </div>
}