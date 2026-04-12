import Products from "./Products";
import HowToOrder from "../components/HowToOrder";
import Contact from "../components/Contact";

function Home() {
    return (
    <main>
    <section className="hero" id="inicio">
        <div className="hero-overlay">
        <h1 className="hero-title">Tata Origen</h1>

        <h2 className="hero-subtitle">
        Dulces que cuidan el alma
        </h2>

        <p className="hero-text">
            En Tata Origen creemos que los pequeños momentos dulces  
            pueden cuidar el alma. Somos un emprendimiento artesanal 
            donde cada producto se prepara en casa con dedicación, 
            ingredientes de calidad y mucho amor.
        </p>

        <p>
            Nuestro propósito es acompañar tus momentos especiales, 
            regalar un detalle o simplemente endulzar tu día.
            </p>

        <button
            className="hero-button"
            onClick={() =>
            window.open(
                "https://wa.me/573004108922?text=Hola,%20quisiera%20hacer%20un%20pedido",
                "_blank"
            )
            }
        >
            Hacer pedido por WhatsApp
        </button>
        </div>
    </section>

    <section id="productos">
        <Products />
    </section>

    <section id="como-pedir">
        <HowToOrder />
    </section>

    <section id="contacto">
        <Contact />
    </section>
    </main>
);
}

export default Home;