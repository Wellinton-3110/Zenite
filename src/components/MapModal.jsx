import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";

const MapModal = React.forwardRef((props, ref) => {
  const position = [38.714286, -9.2257567]; // Coordenadas

  return (
    <div className="">
      <section>
        <MapContainer
          ref={ref} // Passar o ref para o MapContainer
          center={position}
          zoom={17}
          style={{
            height: "440px",
            width: "365px",
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%,-50%)",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </section>
    </div>
  );
});

export default MapModal;
