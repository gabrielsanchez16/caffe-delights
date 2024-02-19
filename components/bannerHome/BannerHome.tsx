'use client'
import { motion } from "framer-motion"
import "./styles.css"

export default function BannerHome() {

    const mouseScrollButton: HTMLElement | null = document.querySelector(".btn-know-us");

    // Verificar si se encontró el elemento
    if (mouseScrollButton) {
        // Agregar un event listener al hacer clic en el botón
        mouseScrollButton.addEventListener("click", function () {
            // Hacer scroll suavemente hasta el elemento con el id "about"
            window.scrollTo({
                top: (document.querySelector("#main") as HTMLElement).offsetTop,
                behavior: "smooth"
            });
        });
    }

    return (
        <div className="contain-banner-home">
            <div className="effect-glass-black">
                <motion.div
                    style={{
                        width: "100%"
                    }}
                    animate={{ x: 0 }}
                    initial={{ x: -400 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <h1>
                        Disfrutá del sabor auténtico
                        <br />
                        en <span className="color-text-orange">café <span className="font-style-cursive">delicia</span></span>
                    </h1>
                </motion.div>
                <motion.div
                    style={{
                        width: "100%"
                    }}
                    animate={{ x: 0 }}
                    initial={{ x: 400 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <p>
                        Café Delicia es una experiencia única con café de alta calidad y un ambiente parchado para todos. ¡Vení y disfrutá de un momento de delicia con nosotros!
                    </p>
                </motion.div>
                <motion.div
                    style={{
                        width: "100%"
                    }}
                    animate={{ y: 0 }}
                    initial={{ y: 400 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <div className="btn-know-us">
                        <a >
                            <span>Conocenos</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={50} strokeWidth={1} stroke="#ffff" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                            </svg>
                        </a>

                    </div>
                </motion.div>

            </div>
        </div>
    )
}