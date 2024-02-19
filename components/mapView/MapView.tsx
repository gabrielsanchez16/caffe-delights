import React from "react"
import { Map, Marker } from "pigeon-maps"
import "./styles.css"


const MapView = () => {

    return (
        <section className="content-map-view">
            {/* <MapContainer style={{height:"400px", width:"100%"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
            <Map height={400} defaultCenter={[3.457792, -76.535466]} defaultZoom={18}>
                <Marker width={50} anchor={[3.457792, -76.535466]} />
            </Map>
        </section>
    );
};

export default MapView;