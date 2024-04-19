import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./index.scss";

function Header() {
    return (
        <div className='header'>
            <Link to="/"><img src={logo} /></Link>
            <ul>
                <li><Link to="/books">Listar livros</Link></li>
                <li><Link to="/book/register">Cadastrar Livro</Link></li>

            </ul>
        </div>
    )
}

export default Header
