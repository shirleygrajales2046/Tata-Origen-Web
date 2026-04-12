import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">

            <div className="header-logo">
                <img src="/logo.png" alt="Tata Origen" />
            </div>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <nav className={menuOpen ? "header-nav active" : "header-nav"}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
                <a href="#como-pedir" onClick={() => setMenuOpen(false)}>Cómo pedir</a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </nav>

        </header>
    );
}

export default Header;