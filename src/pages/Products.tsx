import ProductCard from "../components/ProductCard";
import tatafiesta from "../assets/GalletasTataFiesta.jpeg";
import alfajores from "../assets/alfajores.jpeg";
import GalletasChips from "../assets/GalletasChipChoco.jpeg";
import Postres from "../assets/postres.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Products() {
    return (
        <section id="productos">

            <h2>Nuestros dulces</h2>

            <p className="products-intro">
                Cada producto es preparado de forma artesanal para que disfrutes
                un sabor casero, delicado y lleno de amor.
            </p>

            <Swiper
                modules={[Navigation as any, Pagination as any, Autoplay as any]}
                spaceBetween={24}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                centeredSlides={false}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
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