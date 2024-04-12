import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </nav>
        </>
    )
}
