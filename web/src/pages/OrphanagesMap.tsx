import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import '../styles/pages/orphanage-map.css';
import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from "../utils/mapIcon";

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p> 
                 </header>

                 <footer>
                     <strong>Jales</strong>
                     <span>São Paulo</span>
                 </footer>
            </aside>

            <Map 
                center={[-20.2648213,-50.5446169]} 
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker 
                    icon={mapIcon}
                    position={[-20.2648213,-50.5446169]}
                >
                    <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240} 
                        className="map-popup">
                        Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color='#fff' />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to='/orphanages/create' className='create-orphanage'>
                <FiPlus size={32} color='#fff' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;