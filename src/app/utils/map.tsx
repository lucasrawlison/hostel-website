"use client";

import { FC } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface MapVisProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: number;
}

const MapVis: FC<MapVisProps> = ({
  latitude,
  longitude,
  zoom = 15,
  height = 400,
}) => (
  <div style={{ width: "100%", height }}>
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}
      libraries={["marker"]}
    >
      <Map
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </APIProvider>
  </div>
);

export default MapVis;
