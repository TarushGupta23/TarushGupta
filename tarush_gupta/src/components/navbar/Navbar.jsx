import './navbar.css'
import { dataLen } from '../../data'

export default function Navbar({ setCameraIndex, cameraIndex }) {
    const navIcons = [
        "home", "cup", "resume", "laptop", "mobile", "calendar", "trophy", "testimonial", "mail", "circle-c",
    ]
    const iconIdx = [ dataLen-1, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

    return <nav>
        <div className="navWrapper">
            <ul>
                {
                    navIcons.map((icon,index) => (
                    <li 
                        onClick={() => setCameraIndex(iconIdx[index])}
                        className={index === ((cameraIndex+1)%dataLen) ? "active" : ""}
                        key={icon} 
                        style={{
                            '--mask-image': `url(./../../../icons/navbar/${icon}.png)`,
                            '--mask-active-image': `url(./../../../icons/navbar/${icon}-fill.png)`,
                        }}
                    > </li>))
                }
            </ul>
        </div>
    </nav>
}