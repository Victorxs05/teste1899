import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header className='header'>
            <p>Sistema de Gerenciamento de Usuarios</p>

            <nav>
                <Link to='/'>Início</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/listar-usuarios'>Lista de Usuários</Link>
            </nav>
        </header>
    )
}