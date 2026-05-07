import Products from "./Products";
import HowToOrder from "../components/HowToOrder";
import Contact from "../components/Contact";
import FadeInSection from "../components/FadeInSection";

function Home() {
    return (
        <main>
            <section className="hero" id="inicio">
                <div className="hero-overlay">

                    <h1 className="hero-title">
                        Tata Origen
                    </h1>

                    <h2 className="hero-subtitle">
                        Dulces que cuidan el alma
                    </h2>

                    <p className="hero-text">
                        Cada creación nace en casa, preparada con dedicación,
                        ingredientes seleccionados y ese toque especial que
                        convierte un antojo en un momento memorable.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="hero-button primary"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/573004108922?text=Hola,%20quisiera%20hacer%20un%20pedido",
                                    "_blank"
                                )
                            }
                        >
                            Hacer pedido
                        </button>

                        <button
                            className="hero-button secondary"
                            onClick={() =>
                                document
                                    .getElementById("productos")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Ver productos
                        </button>

                    </div>
                </div>
            </section>

            <FadeInSection>
                <section id="productos">
                    <Products />
                </section>
            </FadeInSection>

            <FadeInSection>
                <section id="como-pedir">
                    <HowToOrder />
                </section>
            </FadeInSection>

            <FadeInSection>
                <section id="contacto">
                    <Contact />
                </section>
            </FadeInSection>
        </main>
    );
}

export default Home;