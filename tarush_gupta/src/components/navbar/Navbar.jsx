import './sample.css'
export default function Navbar() {
    return <>
        <nav>
            <ul>
                {/* className : active for active li */}
                {/* <li><img src="icons/menu.png" alt="" /></li> */}
                <li><img src="icons/home.png" alt="" /></li>
                <li><img src="icons/cup.png" alt="" /></li>
                <li><img src="icons/resume.png" alt="" /></li>
                <li><img src="icons/laptop.png" alt="" /></li>
                <li><img src="icons/mobile.png" alt="" /></li>
                <li><img src="icons/calendar.png" alt="" /></li>
                <li><img src="icons/trophy.png" alt="" /></li>
                <li><img src="icons/testimonial.png" alt="" /></li>
                <li><img src="icons/mail.png" alt="" /></li>
                <li><img src="icons/circle-c.png" alt="" /></li>
            </ul>
        </nav>
        <img src="icons/testImg.jpeg" alt="" className="bgrd" />
    </>
}