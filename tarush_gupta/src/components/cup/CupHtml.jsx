import './cup.css'

export default function CupHtml() {
    return <div className="cupContainer">
        <div className="cupWrapper">
            <div>
                <p>Hello, my name is</p>
                <h1 className="name">Tarush Gupta</h1>
                <h2>I am a <strong>Web</strong> and <strong> Android Developer</strong></h2>
                <ul id="social-media-links">
                    <li id="github"><img src='/icons/cup/github.png' alt='' />Github</li>
                    <li id="linkedin"><img src='/icons/cup/linkedin.png' alt='' />Linkedin</li>
                    {/* <div id="insta"></div> */}
                </ul>
            </div>
            {/* <div className='scrollContainer'> */}
                {/* <span id='scroll-icon'><span></span></span> */}
                 {/* scroll to view  */}
            {/* </div> */}
        </div>
    </div>
}