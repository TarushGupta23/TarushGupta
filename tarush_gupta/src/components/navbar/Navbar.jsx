import './navbar.css'

export default function Navbar({ setCameraIndex, cameraIndex }) {
    const navIcons = [
        "home", "cup", "resume", "laptop", "mobile", "calendar", "trophy", "testimonial", "mail", "credits",
    ]
    let className = '';
    if (cameraIndex===0) className = 'deactive'

    
    return <nav className={className}>
        <div className="navWrapper">
            <ul>
                {
                    navIcons.map((icon,index) => (
                    <li 
                        onClick={() => setCameraIndex(index)}
                        className={index === cameraIndex ? "active" : ""}
                        key={icon} 
                        style={{
                            '--mask-image': `url(./../../../icons/navigation/${icon}.png)`,
                            '--mask-active-image': `url(./../../../icons/navigation/${icon}-fill.png)`,
                        }}
                    > </li>))
                }
            </ul>
        </div>
    </nav>
}