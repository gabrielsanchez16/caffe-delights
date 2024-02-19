import "./styles.css"

export default function OurServices() {

    return (
        <section className="our-services">
            <h2>Nuestros Servicios</h2>
            <div>
                <article>
                    <img src="/assets/home/product-1.jpg" height={200} width={200} alt="coffe" />
                    <p><span>Cafetería especializada:</span> Probá nuestra panedería fresca y emparejala con una bebidita caliente</p>
                </article>
                <article>
                    <img src="/assets/home/product-2.jpg" height={200} width={200} alt="coffe" />
                    <p><span>¿Tenés calor?:</span> Refrescate con nuestra linea de productos heladitos</p>
                </article>
                <article>
                    <img src="/assets/home/product-3.jpg" height={200} width={200} alt="coffe" />
                    <p><span>Bistro pa’ esa hambre:</span> A cualquier hora del día, tenemos antojitos que te dan energía para seguir el día</p>
                </article>
            </div>
        </section>
    )
}