'use client'

import Image from "next/image"
import "./styles.css"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Nav() {

    const pathname = usePathname()
    const [hamburguer, setHamburguer] = useState(false)

    return (

        <>
            <nav className="nav">
                <div className="contain-logo-nav">
                    <Image src={"/assets/logo-white.png"} alt="Logo Caffe delicias" width={40} height={40} />
                    <p>Café <span>delicias</span></p>
                </div>

                <ul className="list-destok">
                    <li >
                        <Link href="/" className={`${pathname === "/" ? "active-link" : ""}`}>
                            Inicio
                        </Link>
                    </li>
                    <li >
                        <Link href="/contact" className={`${pathname === "/contact" ? "active-link" : ""}`}>
                            Contacto
                        </Link>
                    </li>
                </ul>
                <span className="btn-hamburguer" onClick={() => { setHamburguer(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={30} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffff" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>


            </nav>
            {
                hamburguer &&
                <div className="modal" >
                    <div className="modal-content">
                        <div className="header-modal-mobile">
                            <div>
                                <Image src={"/assets/logo-white.png"} alt="Logo Caffe delicias" width={40} height={40} />
                                <p>Café <span>delicias</span></p>
                            </div>
                            <span className="close-btn" onClick={() => { setHamburguer(false) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={30} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </div>

                        <ul className="list-mobile">
                            <li >
                                <Link href="/" className={`${pathname === "/" ? "active-link" : ""}`}>
                                    Inicio
                                </Link>
                            </li>
                            <li >
                                <Link href="/contact" className={`${pathname === "/contact" ? "active-link" : ""}`}>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}