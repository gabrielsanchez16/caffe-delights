import "./styles.css"

export default function BannerHome() {

    return (
        <div className="contain-banner-home">
            <div className="effect-glass-black">
                <h1>
                    Disfrutá del sabor auténtico
                    <br />
                    en <span className="color-text-orange">café <span className="font-style-cursive">delicia</span></span>
                </h1>
                <p>
                    Café Delicia es una experiencia única con café de alta calidad y un ambiente parchado para todos. ¡Vení y disfrutá de un momento de delicia con nosotros!
                </p>
                <div className="btn-know-us">
                    <a href="/#main">
                        <span>Conocenos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={50} strokeWidth={1} stroke="#ffff" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    )
}