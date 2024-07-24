import './computer.css'
export default function ComputerHtml({idx}) {
    const webProjects = [
        {name: 'Atlas Game', repoLink: 'https://github.com/TarushGupta23/ATLAS_GAME', tech: ['react', 'socketio', 'pgsql'], liveLink: 'https://atlas-game.vercel.app', desc: 'An interactive web app built with React and Socket.IO, featuring a custom Express server and API, both developed by me, and a PostgreSQL database for efficient data management.'},
        {name: 'Parking Management system', repoLink: 'https://github.com/TarushGupta23/Parking-Management-System', tech: ['php', 'css'], liveLink: '', desc: 'A comprehensive database management system for efficient and organized parking management. The system is built using HTML, CSS, JavaScript, and PHP, providing a user-friendly interface.'},
        {name: 'Iota Website', repoLink: '', tech: ['css'], liveLink: '', desc: 'Official Website of Iota Club (media cell of college)'},
        // {name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
        // {name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
        // {name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
        // {name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
    ]
    const androidProjects = [
        {name: '', repoLink: '', tech: [], liveLink: '', desc: ''},
    ]
    const renderWebList = () => {
        return webProjects.map((project, index) => (<li key={index} className={index==webProjects.length-1?'web last-item':'web'}>
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
        </li>))
    }
    const renderAndroList = () => {
        return androidProjects.map((project, index) => (<li key={index} className={index==androidProjects.length-1?'android last-item':'android'}>
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
        </li>))
    }
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