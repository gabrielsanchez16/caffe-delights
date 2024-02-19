"use client";
import FormContact from "@/components/formContact/FormContact"
import "./styles.css"
import MapView from "@/components/mapView/MapView"
import dynamic from "next/dynamic"

const Contact = ()=>{
 
const DynamicMap = dynamic(() => import('../../components/mapView/MapView'))
    return(
        <section className="content-contact">
            <FormContact/>
            <MapView/>
        </section>
    )
}
 
export default Contact