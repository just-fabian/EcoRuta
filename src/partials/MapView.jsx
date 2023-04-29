import React, { useEffect, useState } from 'react';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import '../styles/map.css';

const MapV = () => {
  const [lng, setLng] = useState(-66.156376);
  const [lat, setLat] = useState(-17.394211);

  const [trucksLocations, setTrucksLocations] = useState([
    {lng: -66.156376, lat: -17.394211}, {lng: -66.1505896987, lat: -17.3756628821}, {lng: -66.15602339288954, lat: -17.388139257954773}
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                setLng(position.coords.longitude)
                setLat(position.coords.latitude)
            },
            (error) => {
                console.log(error)
                setLng(-66.156376)
                setLat(-17.394211)
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0
            }
        );
        } else {
            setLng(-66.156376)
            setLat(-17.394211)
        }
  })

  return (
        <Map
            initialViewState={
                {
                    latitude: lat,
                    longitude: lng,
                    zoom: 14,
                }
            }
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ height: '100vh'}}
            mapboxAccessToken='pk.eyJ1IjoiZmFiaWFuMTMwNCIsImEiOiJjbGgxY2V0MDIwZ2c1M21td3p3ZnhscjBnIn0.OLeCRjH-HMImvve7licNNw'
        >
        <NavigationControl showCompass={false} position='bottom-right' style={{ marginBottom: 24 }} />
        <Marker longitude={lng} latitude={lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
            <img src={'https://uploads-ssl.webflow.com/62c5e0898dea0b799c5f2210/62e8212acc540f291431bad2_location-icon.png'} alt="marker" width={40} />
        </Marker>
        {
            trucksLocations.map(truck => (
                <Marker longitude={truck.lng} latitude={truck.lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/1166/1166009.png'} alt="marker" width={30} />
                </Marker>
            ))
        }
    </Map>
  );
};

export default MapV;
