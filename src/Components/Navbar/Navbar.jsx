import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-logo">AC<span>WID</span></div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li className="nav-contact">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar