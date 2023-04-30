import React, { useEffect, useState } from 'react';
import Map, { GeolocateControl, Layer, Marker, NavigationControl, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { useParams } from 'react-router';

const TruckRoute = ({ geojson }) => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [center, setCenter] = useState({ lat: -17.394211, lng: -66.156376});

  const handlePermission = () => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
        console.log(result.state)
        if (result.state === "denied") {
            alert('Por favor, concede los permisos para obtener tu ubicación actual')
        }
        result.addEventListener("change", () => {
            handlePermission();
        });
    });
  }

  useEffect(() => {
    if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                setLng(position.coords.longitude)
                setLat(position.coords.latitude)
                setCenter({ lat: position.coords.latitude, lng: position.coords.longitude})
            },
            (error) => {
                setCenter({ lat: -17.394211, lng: -66.156376})
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0
            }
        );
        return () => {
            navigator.geolocation.clearWatch(watchId);
          };
        } else {
            setCenter({ lat: -17.394211, lng: -66.156376})
        }
  }, [])

  return (
    <Map
            initialViewState={
                {
                    latitude: center.lat,
                    longitude: center.lng,
                    zoom: 13,
                }
            }
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{ height: '100vh'}}
            mapboxAccessToken='pk.eyJ1IjoiZmFiaWFuMTMwNCIsImEiOiJjbGgxY2hpOXUwZXM3M251ajN0azVzYXVoIn0.uaAvRGjN-kWgHXMrBvxYnA'
        >
        <NavigationControl showCompass={false} position='bottom-right' style={{ marginBottom: 24 }} />
        <Marker longitude={lng} latitude={lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
            <img src={'https://uploads-ssl.webflow.com/62c5e0898dea0b799c5f2210/62e8212acc540f291431bad2_location-icon.png'} alt="marker" width={40} />
        </Marker>


        {
            lat && lng && (
                <Marker longitude={lng} latitude={lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
                    <img src={'https://uploads-ssl.webflow.com/62c5e0898dea0b799c5f2210/62e8212acc540f291431bad2_location-icon.png'} alt="marker" width={40} />
                </Marker>
            )
        }

        <Source id="route" type="geojson" data={geojson}>
        <Layer
            id="route"
            type="line"
            source="route"
            layout={{ 'line-join': 'round', 'line-cap': 'round' }}
            paint={{ 'line-color': '#888', 'line-width': 8 }}
        />
        </Source>
    </Map>
  );
};

export default TruckRoute;
