import './computer.css'
export default function ComputerHtml({idx}) {
    const webProjects = [
        {name: 'Name of Project1', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project2', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project3', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project4', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project5', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project6', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project7', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project8', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
    ]
    const androidProjects = [
        {name: 'Name of Project a', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project b', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project c', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project d', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project e', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project f', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project g', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
        {name: 'Name of Project h', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description hello this is description hello this is description hello this is description hello this is description hello this is description hello this '},
    ]
    const renderWebList = () => {
        return webProjects.map((project, index) => (<li key={index} className={index==webProjects.length-1?'web last-item':'web'}>
            <div className="tech-imgs">
                {
                    project.tech.map((tech) => (<img key={tech} src={`/icons/loader/${tech}.png`}></img>))
                }
            </div>
            <div className='data'>
                <span className='name'>{project.name} <span>{project.desc}</span></span>
                <ul className='links'>
                    <a href={project.repoLink} target='_blank'><img src="/icons/cup/github.png" alt="" /> {project.repoName}</a>
                    <a href={project.liveLink} target='_blank'><img src="/icons/cup/link.png" alt="" /> view live</a>
                </ul>
            </div>
        </li>))
    }
    const renderAndroList = () => {
        return androidProjects.map((project, index) => (<li key={index} className={index==androidProjects.length-1?'android last-item':'android'}>
            <div className="tech-imgs">
                {
                    project.tech.map((tech) => (<img key={tech} src={`/icons/loader/${tech}.png`}></img>))
                }
            </div>
            <div className='data'>
                <span className='name'>{project.name} <span>{project.desc}</span></span>
                <ul className='links'>
                    <a href={project.repoLink} target='_blank'><img src="/icons/cup/github.png" alt="" /> {project.repoName}</a>
                    <a href={project.liveLink} target='_blank'><img src="/icons/cup/link.png" alt="" /> view live</a>
                </ul>
            </div>
        </li>))
    }
    return <div className={idx===2 || idx===3? "computerContainer" : "computerContainer hidden"}>
        <div className="computerWrapper">
            <strong>Top {idx===2? 'Web' : 'Android'} Projects</strong>
            <ul className={idx===2? 'web' : 'android'}>
                { renderWebList() }
                { renderAndroList() }
            </ul>
        </div>
    </div>
}