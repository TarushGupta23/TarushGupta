import './journey.css'
export default function Journey() {
    const journeyList = [
        {title: 'Java Learning', duration: 'May 2024 - July 2024', desc: 'hello this is a short description of how i learned java from alpha course, and this is some faaltu typing dont to increase the length of content, yeah ik ik', img: 'code.jpeg', link: ''},
        {title: 'Java Learning', duration: 'May 2024 - July 2024', desc: 'hello this is a short description of how i learned java from alpha course, and this is some faaltu typing dont to increase the length of content, yeah ik ik', img: 'code.jpeg', link: ''},
        {title: 'Java Learning', duration: 'May 2024 - July 2024', desc: 'hello this is a short description of how i learned java from alpha course', img: 'code.jpeg', link: ''},
        {title: 'Java Learning', duration: 'May 2024 - July 2024', desc: 'hello this is a short description of how i learned java from alpha course', img: 'code.jpeg', link: ''},
    ]
    return (<section id='journey-section'>
        <ul className='journey-list'>
            {journeyList.map((item, index) => {
                return index%2 == 0 ?
                (<li id={index}>
                    <div className="journey-text">
                        <h3 className="journey-title">{item.title}</h3>
                        <span className="journey-dur">{item.duration}</span>
                        <p className='journey-desc'>{item.desc}</p>
                        <p className='journey-link'>{item.link}</p>
                    </div>
                    <div className="journey-line"><span></span></div>
                    <div className="journey-image">
                        <span> <img src={`res/${item.img}`} alt={`image representing ${item.title}`} /> </span>
                    </div>
                </li>)
                : (<li id={index}>
                    <div className="journey-image">
                        <span> <img src={`res/${item.img}`} alt={`image representing ${item.title}`} /> </span>
                    </div>
                    <div className="journey-line"><span></span></div>
                    <div className="journey-text">
                        <h3 className="journey-title">{item.title}</h3>
                        <span className="journey-dur">{item.duration}</span>
                        <p className='journey-desc'>{item.desc}</p>
                        <p className='journey-link'>{item.link}</p>
                    </div>
                </li>)
            })}
        </ul>
    </section>)
}