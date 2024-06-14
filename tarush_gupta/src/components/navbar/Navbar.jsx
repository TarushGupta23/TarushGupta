import './navbar.css'

export default function Navbar() {
    const navItems = ['Journey', 'Projects', 'Testimonials', 'Contact Me'];

    return (<nav>
        <hr />
        <ul>
            {navItems.map(item => (<li id={item}>{item}</li>))}
        </ul>
    </nav>)
}