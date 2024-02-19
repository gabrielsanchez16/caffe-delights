import Image from "next/image";
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Footer() {

    return (
        <footer>
            <section className="content-menu-logo">
                <div>
                    <div className="logo-name">
                        <Image src="/assets/logo-white.png" width={80} height={80} alt="logo coffe-delicias" />
                        <p>Café <span>delicias</span></p>
                    </div>
                    <div className="text-coffe">
                        <h2>
                            El secreto de un café rico es  tomarselo entre <span>amigos</span>
                        </h2>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Nosotros</li>
                        <li>Café</li>
                        <li>Panaderia</li>
                        <li>Bistro</li>
                        <li>Testimonio</li>
                        <li>Historia</li>
                        <li><Link href="/contact">Contacto</Link></li>
                    </ul>
                </div>
            </section>
            <section className="line-seperation"></section>
            <section className="content-logo-socials">
                <ul>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/facebook.png" width={32} height={32} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/instagram.png" width={32} height={32} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/twitter.png" width={32} height={32} alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/linkedin.png" width={32} height={32} alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/spotify.png" width={32} height={32} alt="spotify" />
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}