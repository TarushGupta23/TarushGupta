import { useEffect } from 'react';
import { webProjects, androidProjects } from '../../data'
import './computer.css'

export default function ComputerHtml({idx}) {

    const handleMouseOver = (id) => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.classList.remove('invisible')
            elem.classList.add('visible')
        }
    }
    const handleMouseOut = (id) => {
        const elem = document.getElementById(id);
        if (elem) {
            elem.classList.remove('visible')
            elem.classList.add('invisible')
        }
    }

    const renderWebList = () => {
        return webProjects.map((project, index) => (
            <li key={index} className={index==webProjects.length-1?'web last-item':'web'} onMouseEnter={() => handleMouseOver(project.liId)} onMouseLeave={() => handleMouseOut(project.liId)}>
                <div className="tech-imgs">
                    {
                        project.tech.map((tech) => (<img key={tech} src={`/icons/skills/${tech}.png`}></img>))
                    }
                </div>
                <div className='data'>
                    <span className='name'>{project.name} <span>{project.desc}</span></span>
                    <ul className='links'>
                        <a href={project.repoLink} target='_blank'><img src="/icons/other/github.png" alt="" /> Repo</a>
                        {project.liveLink && <a href={project.liveLink} target='_blank'><img src="/icons/other/link.png" alt="" /> view live</a>}
                    </ul>
                </div>
            </li>
        ))
    }

    const renderAndroList = () => {
        return androidProjects.map((project, index) => (
            <li key={index} className={index==androidProjects.length-1?'android last-item':'android'}  onMouseEnter={() => handleMouseOver(project.liId)} onMouseLeave={() => handleMouseOut(project.liId)}>
                <div className="tech-imgs">
                    {
                        project.tech.map((tech) => (<img key={tech} src={`/icons/skills/${tech}.png`}></img>))
                    }
                </div>
                <div className='data'>
                    <span className='name'>{project.name} <span>{project.desc}</span></span>
                    <ul className='links'>
                        <a href={project.repoLink} target='_blank'><img src="/icons/other/github.png" alt="" /> Repo</a>
                        {project.liveLink && <a href={project.liveLink} target='_blank'><img src="/icons/other/link.png" alt="" /> view live</a>}
                    </ul>
                </div>
            </li>
        ))
    }

    useEffect(() => {
        let timeoutId = [];
        if (idx === 4) {
            androidProjects.forEach((item, index) => {
                let currImg = 0
                timeoutId[index] = setInterval(() => {
                    const projLi = document.querySelectorAll(`.imgs-${item.liId} .proj-img`)
                    projLi.forEach((li) => {
                        li.classList.remove('active')
                    })
                    projLi[currImg].classList.add('active')
                    currImg = (currImg + 1) % item.imgs
                }, 2500)
            })
        }
        if (idx === 3) {
            webProjects.forEach((item, index) => {
                let currImg = 0
                timeoutId[index] = setInterval(() => {
                    const projLi = document.querySelectorAll(`.imgs-${item.liId} .proj-img`)
                    projLi.forEach((li) => {
                        li.classList.remove('active')
                    })
                    projLi[currImg].classList.add('active')
                    currImg = (currImg + 1) % item.imgs
                }, 2500)
            })
        }

        return () => {
            timeoutId.forEach((id) => {
                clearInterval(id)
            })
        }
    }, [idx])

    return <div className={idx===3 || idx===4? "computerContainer" : "computerContainer hidden"}>
        <div className="computerWrapper">
            <strong>Top {idx===3? 'Web' : 'Android'} Projects</strong>
            <ul className={idx===3? 'web' : 'android'}>
                { renderWebList() }
                { renderAndroList() }
            </ul>
        </div>
    </div>
}