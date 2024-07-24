import './cup.css'

export default function CupHtml({idx}) {
    return <div className={idx===1? "cupContainer" : "cupContainer hidden"}>
        <div className="cupWrapper">
            <div>
                <p>Hello, my name is</p>
                <h1 className="name">Tarush Gupta</h1>
                <h2>I am a <strong>Web</strong> and <strong> Android Developer</strong></h2>
                <ul id="social-media-links">
                    <a href="https://github.com/TarushGupta23" target='_blank'>
                        <li id="github"><img src='/icons/other/github.png' alt='' /><span>Github</span></li>
                    </a>
                    <a href="https://www.linkedin.com/in/tarush23-gupta/" target='_blank'>
                        <li id="linkedin"><img src='/icons/other/linkedin.png' alt='' /><span>Linkedin</span></li>
                    </a>
                </ul>
            </div>
        </div>
        <div className='scrollContainer'>
            <span id='scroll-icon'></span>
        </div>
    </div>
}