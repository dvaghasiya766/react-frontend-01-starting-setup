// src/components/UIElements/Map.jsx
import React, { useRef, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

const MapComponent = ({ center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([center.lng, center.lat]), // Convert to map projection
        zoom: zoom,
      }),
    });

    return () => map.setTarget(null);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "200px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default MapComponent;
