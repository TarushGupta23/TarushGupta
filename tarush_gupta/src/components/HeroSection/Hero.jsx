import './hero.css'

export default function Hero() {
    return (<>
        <section id="hero-section">
            <div className="hero-img">
                <img src="res/code.jpeg" alt="" />
                <div className="shade"></div>
            </div>
            <div id="info">
                <span><img src="res/quote.png" alt="" />Hi, My name is</span>
                <h1>T<strong>arush </strong>G<strong>upta</strong></h1>
                <h3>I am Web and Android developer</h3>
            </div>
        </section>
    </>)
}