import './resume.css'

export default function ResumeHtml({ idx, docLocation, setDocLocation }) {
    const handleBtnClick = (num) => {
        if (docLocation !== num) { setDocLocation(num) }
    }
    
    return <div className={idx===2? "resumeContainer" : "resumeContainer hidden"}>
        <div className="resumeWrapper">
            <div className={docLocation===1? "btn navigation" : "disabled btn navigation"} onClick={() => handleBtnClick(0)}> &lt; </div>
            {   
                docLocation === 0 ?
                <a href="./docs/cvv.pdf" download="cvv.pdf" > 
                    <div className="download btn">Download</div> 
                </a> : 
                <a href="./docs/resume.pdf" download="resume.pdf" > 
                    <div className="download btn">Download</div> 
                </a>
            }
            <div className={docLocation===0? "btn navigation" : "disabled btn navigation"} onClick={() => handleBtnClick(1)}> &gt; </div>
        </div>
    </div>
}