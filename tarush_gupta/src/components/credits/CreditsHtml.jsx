import './credits.css'

export default function CreditsHtml({ idx }) {
    const creditList = [
        {link: 'gmail.com', name: 'tarush gupta'}
    ]
    return <div className="creditsContainer">
        <div className="creditsWrapper">
            <div className="left"></div>
            <div className="right"></div>
        </div>
    </div>
}