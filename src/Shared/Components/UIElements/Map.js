// import React, { useRef, useEffect } from "react";

// import "./Map.css";

// const Map = (props) => {
//   const mapRef = useRef();

//   const { center, zoom } = props;

//   useEffect(() => {
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: center,
//       zoom: zoom,
//     });

//     new window.google.maps.Marker({ position: center, map: map });
//   }, [center, zoom]);

//   return (
//     <div
//       ref={mapRef}
//       className={`map ${props.className}`}
//       style={props.style}
//     ></div>
//   );
// };

// export default Map;
import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: zoom,
      center: center,
      mapId: "40443c5a815f5d694984a2f1", // Required for Advanced Markers
    });

    // ✅ Check if AdvancedMarkerElement is available
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        title: "Uluru",
      });
    } else {
      console.error(
        "AdvancedMarkerElement is not available. Did you load the 'marker' library?"
      );
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
