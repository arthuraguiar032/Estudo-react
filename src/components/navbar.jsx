import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/courses">Cursos</Link></li>
                <li><Link to="/course_description">Descrição</Link></li>
                <li><Link to="/subscription">Inscrição</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link to="/sel_aluno_ativo">Aluno Ativo</Link></li>
                <li><Link to="/atualiza_prazos">Atualiza Prazos</Link></li>
                <li><Link to="/cetreina_sobre">Sobre Cetreina</Link></li>
            </ul>
        </nav>
        </>
    )
}
