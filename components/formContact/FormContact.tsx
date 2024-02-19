'use client'

import "./styles.css"
import { FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";


export default function FormContact() {

    const {push}=useRouter()
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [errMessage, setErrMessage] = useState<string>("")
    const [success, setSuccess] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const templateParams = {
        name:name,
        email:email,
        phone:phone,
        message:message
    }

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (name === "" || phone === "" || email === "" || message === "") {
            setErrMessage("Debes llenar todos los campos")
            setTimeout(() => {
                setErrMessage("")
            }, 3000);
        } else if(form.current){
            setLoading(true)
            try {
                await emailjs.sendForm('service_je8i61q', 'template_x6tqblb', form.current, {
                    publicKey: 'NIrtyIx-h76vAmDMx',
                });
                console.log('SUCCESS!',templateParams);
                setSuccess("Enviado Correctamente")
                setLoading(false)
                setTimeout(() => {
                    setSuccess("")
                    push("/")
                }, 3000);
                
                
            } catch (error: any) {
                console.log('FAILED...', error.text);
                setErrMessage("Error al enviar el correo")
                setLoading(false)
                setTimeout(() => {
                    setErrMessage("")
                }, 3000);
            }
        }
    }

    return (
        <form ref={form} onSubmit={(e) => { sendMessage(e) }} className="form-contact">
            <legend>¿Querés hablar?</legend>
            <input type="text" name="name" onChange={(e) => {
                setName(e.target.value)
            }} placeholder="Tu nombre" />
            <input name="email" onChange={(e) => {
                setEmail(e.target.value)
            }} type="text" placeholder="Tu correo" />
            <input name="phone" onChange={(e) => {
                setPhone(e.target.value)
            }} type="text" placeholder="Tu telefono" />
            <textarea name="message" onChange={(e) => {
                setMessage(e.target.value)
            }}  id="" placeholder="¿Un mensaje?"></textarea>
            {
                errMessage !== "" &&
                <p className="err-message">
                    {errMessage}
                </p>
            }
             {
                success !== "" &&
                <p className="success-message">
                    {success}
                </p>
            }
            <BeatLoader
             loading={loading}
             style={{margin:"1rem auto"}}
             color="#EE8E11"
             size={30}
            />
            {
                !loading &&
                <input type="submit" value="¡Hablanos!" />
            }
            

        </form>
    )
}