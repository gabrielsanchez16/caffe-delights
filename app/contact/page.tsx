"use client";
import FormContact from "@/components/formContact/FormContact"
import "./styles.css"
import MapView from "@/components/mapView/MapView"
import dynamic from "next/dynamic"
import { motion } from "framer-motion";

const Contact = ()=>{
 
const DynamicMap = dynamic(() => import('../../components/mapView/MapView'))
    return(
        <section className="content-contact">
            <motion.div animate={{ x: 0 }}
                    initial={{ x: -800 }}
                    transition={{ ease: "easeOut", duration: 1 }} className="content-form-animate">
                <FormContact/>
            </motion.div>
            <motion.div animate={{ x: 0 }}
                    initial={{ x: 800 }}
                    transition={{ ease: "easeOut", duration: 1 }} className="content-map-animate">
                <MapView/>
            </motion.div>
            
        </section>
    )
}
 
export default Contact