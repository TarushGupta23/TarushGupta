import './navbar.css'
export default function Navbar() {
    return <nav>
        <ul>
            {/* className : active for active li */}
            {/* <li><img src="icons/menu.png" alt="" /></li> */}
            <li><img src="icons/navbar/home.png" alt="" /></li>
            <li className='active'><img src="icons/navbar/cup.png" alt="" /></li>
            <li><img src="icons/navbar/resume.png" alt="" /></li>
            <li id='laptopIcon'><img src="icons/navbar/laptop.png" alt="" /></li>
            <li><img src="icons/navbar/mobile.png" alt="" /></li>
            <li><img src="icons/navbar/calendar.png" alt="" /></li>
            <li><img src="icons/navbar/trophy.png" alt="" /></li>
            <li><img src="icons/navbar/testimonial.png" alt="" /></li>
            <li><img src="icons/navbar/mail.png" alt="" /></li>
            <li><img src="icons/navbar/circle-c.png" alt="" /></li>
        </ul>
    </nav>
}