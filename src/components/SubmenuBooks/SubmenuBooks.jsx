import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

function SubmenuBooks() {
    return (
        <div className='submenu'>
            <ul>
                <li><Link to="/book/register">te Livro</Link></li>
            </ul>
        </div>
    )
}

export default SubmenuBooks
