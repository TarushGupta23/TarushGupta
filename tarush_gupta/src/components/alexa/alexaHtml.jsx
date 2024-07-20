import './alexa.css'

export default function AlexaHtml() {
    const list = [
        { by: 'DP tripathi', position: 'Diputy Librarian, NIT Jalandhar', text: ` to amaze me. It's inspiring to see someone so consistently go above and beyond. Your determination and perseverance are truly commendable. ` }
    ]
    return <div className="alexaContainer">
        <div className="speechBox">
            <div className="imageCover">
                <img src="TarushFace.jpg" alt="" />
            </div>
            <div>
                <div className="speech">
                    <span className="icon"></span>
                    {list[0].text}
                </div>
                <div className="data">
                    <strong>{list[0].by}</strong>
                    <span>{list[0].position}</span>
                </div>
            </div>
            <div className="tail">
                {/* <img src="/tail.png" alt="" /> */}
            </div>
        </div>
    </div>
}