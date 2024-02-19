import Image from "next/image"
import "./styles.css"
import Link from "next/link"

export default function ComeUs() {


    return (
        <section className="content-come-us">
            <div className="first-section">
                <Image src="/assets/home/contact-1.jpg" height={300} width={300} alt="caenos 1" />
            </div>
            <div className="second-section">

                <div className="content-text">
                    <h2>¡Caénos!</h2>
                    <p>Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</p>
                    <button>
                        <Link href="/contact">
                            Contactanos
                        </Link>
                    </button>
                </div>
                <Image src="/assets/home/contact-2.jpg" width={300} height={300} alt="caenos 2" />
            </div>
        </section>
    )
}