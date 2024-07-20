import { useState } from 'react'
import './navbar.css'

export default function Navbar() {
    const navIcons = [
        "home", "cup", "resume", "laptop", "mobile", "calendar", "trophy", "testimonial", "mail", "circle-c",
    ]
    const [selectedIcon, setSelectedIcon] = useState("home")
    return <nav>
        <div className="navWrapper">
            <ul>
                {
                    navIcons.map(icon => (
                    <li 
                        onClick={() => setSelectedIcon(icon)}
                        className={icon === selectedIcon ? "active" : ""}
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