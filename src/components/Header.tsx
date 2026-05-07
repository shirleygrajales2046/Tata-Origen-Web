import { useEffect, useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-logo">
                <img src="/logo.png" alt="Tata Origen" />
            </div>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
                <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
                <a href="#como-pedir" onClick={() => setMenuOpen(false)}>Cómo pedir</a>
                <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
            </nav>
        </header>
    );
}

export default Header;