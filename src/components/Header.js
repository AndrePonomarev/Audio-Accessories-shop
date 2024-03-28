import React from "react";

export default function Header() {
    return (
        <header>
            <div className="header">
                <span className="logo">QPICK</span>
                <ul className="nav">
                    <li><img src="./img/izbrannoe.png" alt="Избранное" /></li>
                    <li><img src="./img/korzina.png" alt="Корзина" /></li>
                </ul>
            </div>
        </header>
    )
}