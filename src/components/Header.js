import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo">QPICK</span>
                <ul className="nav">
                    <li>Избранное</li>
                    <li>Корзина</li>
                </ul>
            </div>
        </header>
    )
}