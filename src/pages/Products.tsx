import ProductCard from "../components/ProductCard";
import tatafiesta from "../assets/GalletasTataFiesta.jpeg";
import alfajores from "../assets/Alfajores.jpeg";
import GalletasChips from "../assets/GalletasChipChoco.jpeg";
import Postres from "../assets/postres.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Products() {
    return (
        <section id="productos">

            <h2>Nuestros dulces</h2>

            <p className="products-intro">
                Cada producto es preparado de forma artesanal para que disfrutes
                un sabor casero, delicado y lleno de amor.
            </p>

            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1.2}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >

                <SwiperSlide>
                    <ProductCard
                        name="Alfajores rellenos de arequipe"
                        description="Suaves y perfectos para acompañar un café."
                        message="Hola, quiero pedir alfajores 🥰"
                        image={alfajores}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard
                        name="Galletas Tata Fiesta"
                        description="Galletas suaves con grajeas de colores."
                        message="Hola, quiero galletas Tata Fiesta ✨"
                        image={tatafiesta}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard
                        name="Galletas Chips de Chocolate"
                        description="Clásicas, artesanales y llenas de sabor."
                        message="Hola, quiero galletas chips 🍪"
                        image={GalletasChips}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard
                        name="Postres refrigerados"
                        description="Postres cremosos preparados en casa."
                        message="Hola, quiero ver los sabores disponibles. 🍰"
                        image={Postres}
                    />
                </SwiperSlide>

            </Swiper>

        </section>
    );
}

export default Products;