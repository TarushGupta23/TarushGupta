import './computer.css'
export default function ComputerHtml() {
    const projectList = [
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
        {name: 'Name of Project', repoName: 'RepoName', repoLink: 'youtube.com', tech: ['react', 'android', 'firebase'], liveLink: 'google.com', desc: 'hello this is description'},
    ]
    return <div className="computerContainer">
        <div className="computerWrapper">
            <strong>Top Web Projects</strong>
            <ul>
                {
                    projectList.map((project, index) => (<li key={index}>
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
            </ul>
        </div>
    </div>
}