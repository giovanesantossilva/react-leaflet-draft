import "leaflet/dist/leaflet.css";

import React from "react";
import { Icon } from 'leaflet';
import { createRoot } from "react-dom/client";
import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet";

import { DraftControl } from "../src/Draft";

const position = [ -22.2108112, -49.6771926 ];

const App = () => {
    const icon = new Icon({ iconUrl: require('./marker.png'), iconSize: [ 35, 35 ] });
    return(
        <MapContainer
            zoom={14}
            center={position}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FeatureGroup>
                <DraftControl
                    draw={{
                        circle: true,
                        rectangle: true,
                        marker: {
                            icon
                        }
                    }}
                    limitLayers={5}
                    onEdited={e => console.log(e)}
                    onDeleted={e => console.log(e)}
                    onCreated={e => console.log(e)}
                />
                <Marker position={[-22.2108112, -49.6771926]} icon={icon}/>
            </FeatureGroup>
        </MapContainer>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);
