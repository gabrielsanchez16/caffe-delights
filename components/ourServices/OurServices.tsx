'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./styles.css";

export default function OurServices() {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        y: [0, -10, 10, 0], // La secuencia de movimientos: subir, bajar, volver al centro
        transition: { duration: 2, ease: "easeInOut", times: [0, 0.25, 0.75, 1] },
      });
    }, 5000); // Se ejecuta cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="our-services">
      <h2>Nuestros Servicios</h2>
      <div>
        <motion.div
          animate={controls}
          className="article"
          style={{ originY: 0.5 }} // Ajusta el punto de origen para una rotación suave
        >
          <img src="/assets/home/product-1.jpg" height={200} width={200} alt="coffe" />
          <p><span>Cafetería especializada:</span> Probá nuestra panadería fresca y emparejala con una bebida caliente</p>
        </motion.div>
        <motion.div
          animate={controls}
          className="article"
          style={{ originY: 0.5 }} // Ajusta el punto de origen para una rotación suave
        >
          <img src="/assets/home/product-2.jpg" height={200} width={200} alt="coffe" />
          <p><span>¿Tenés calor?:</span> Refrescate con nuestra línea de productos heladitos</p>
        </motion.div>
        <motion.div
          animate={controls}
          className="article"
          style={{ originY: 0.5 }} // Ajusta el punto de origen para una rotación suave
        >
          <img src="/assets/home/product-3.jpg" height={200} width={200} alt="coffe" />
          <p><span>Bistro pa’ esa hambre:</span> A cualquier hora del día, tenemos antojitos que te dan energía para seguir el día</p>
        </motion.div>
      </div>
    </section>
  );
}
