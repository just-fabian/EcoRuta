import React, { useEffect, useState } from 'react';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

const Dumpsters = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [center, setCenter] = useState({ lat: -17.394211, lng: -66.156376});
  const [dumpstersLocations, setDumpstersLocations] = useState([
    {lng: -66.175949, lat: -17.369272}, {lng: -66.160909, lat: -17.381478}, {lng: -66.166337, lat: -17.388775}, {lng: -66.158167, lat: -17.395818},
    {lng: -66.159584, lat: -17.388388}, {lng: -66.153488, lat: -17.391505}, {lng: -66.151913, lat: -17.393445}, {lng: -66.137209, lat: -17.374094},
    {lng: -66.154501, lat: -17.387321}, {lng: -66.175422, lat: -17.396351}, {lng: -66.165383, lat: -17.378801}, {lng: -66.145541, lat: -17.390043}
  ]);

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

        {
            dumpstersLocations.map(dumpster => (
                <Marker key={dumpster.lat} longitude={dumpster.lng} latitude={dumpster.lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/1833/1833783.png'} alt="marker" width={30} />
                </Marker>
            ))
        }
    </Map>
  );
};

export default Dumpsters;
