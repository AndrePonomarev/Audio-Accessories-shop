import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="header">
                <span className="logo"> <Link to="/">QPICK</Link></span>
                <ul className="nav">
                    <li><img src="./img/izbrannoe.png" alt="Избранное" /></li>
                    <Link to="/cart"><li><img src="./img/korzina.png" alt="Корзина" /></li></Link>
                </ul>
            </div>
        </header>
    )
}