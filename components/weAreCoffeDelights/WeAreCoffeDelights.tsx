import Image from "next/image";
import "./styles.css"

export default function WeAreCoffeDelights() {


    return (
        <section id="main" className="content-are-coffe">
            <div className="first-section">
                <Image className="img-coffe-we-are" src="/assets/home/locally-sourced.jpg" height={450} width={350} alt="coffe" />
                <div className="we-are-text">
                    <h2>Somos Café Delicias</h2>
                    <p>
                        Una marca caleña y comprometida con ofrecerte una experiencia auténtica y acogedora. Calidosos, auténticos y amables en todo lo que hacemos. Buscamos crear momentos de verdadera delicia para todos con nuestra selección de cafés locales de primera y platos para calmarte el hambre. Nuestro enfoque cálido y amistoso refleja nuestro compromiso con tu satisfacción y el bienestar de los caleños.
                    </p>
                </div>
            </div>
            <div className="second-section">
                <article>
                    <Image src="/assets/home/locally-sourced.png" height={128} width={128} alt="origen" />
                    <div>
                        <h3>Origen Local</h3>
                        <p>Priorizamos los productos locales, colaborando estrechamente con agricultores del país para garantizar la frescura y calidad en cada taza.</p>
                    </div>
                </article>
                <article>
                    <Image src="/assets/home/hollistic.png" height={128} width={128} alt="hollistic" />
                    <div>
                        <h3>Enfoque Holistico</h3>
                        <p>Consideramos cada aspecto del proceso de producción con cuidado y respeto hacia la naturaleza, promoviendo prácticas sostenibles en cada etapa.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
