function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">
                    <h3>Tata Origen</h3>
                    <p>Dulces que cuidan el alma</p>
                </div>

            </div>

            <div className="footer-bottom">
                <small>
                    © {new Date().getFullYear()} Tata Origen · Hecho artesanalmente
                </small>
            </div>

        </footer>
    );
}

export default Footer;