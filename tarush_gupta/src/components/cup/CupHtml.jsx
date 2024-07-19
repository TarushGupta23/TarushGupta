import './cup.css'

export default function CupHtml() {
    return <div className="cupContainer">
        <div className="cupWrapper">
            <p>Hi I am</p>
            <h1 className="name">Tarush Gupta</h1>
            <ul id="social-media-links">
                <li id="github"><img src='/icons/cup/github.png' alt='' />Github</li>
                <li id="linkedin"><img src='/icons/cup/linkedin.png' alt='' />Linkedin</li>
                {/* <div id="insta"></div> */}
            </ul>
            {/* <div className='scrollContainer'> */}
                {/* <span id='scroll-icon'><span></span></span> */}
                 {/* scroll to view  */}
            {/* </div> */}
        </div>
    </div>
}