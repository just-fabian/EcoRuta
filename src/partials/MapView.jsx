import React, { useEffect, useState } from 'react';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

const MapV = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [center, setCenter] = useState({ lat: -17.394211, lng: -66.156376});

  const [trucksLocations, setTrucksLocations] = useState([
    {lng: -66.156376, lat: -17.394211}, {lng: -66.1505896987, lat: -17.3756628821}, {lng: -66.15602339288954, lat: -17.388139257954773}
  ]);

  // Truck simulation
  const [truckLocationSimulation, setTruckLocationSimulation] = useState({lng: -66.188740, lat: -17.37092});

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(truckLocationSimulation.lng >= -66.137217){
            setTruckLocationSimulation({lng: -66.188740, lat: -17.37092})
        }
      setTruckLocationSimulation(prevLocation => ({
        lng: prevLocation.lng + 0.00002,
        lat: prevLocation.lat - 0.0000014
      }));
    }, 90);
  
    return () => clearInterval(intervalId);
  }, [truckLocationSimulation]);
  // Finish truck simulation

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

            {/** truck simulation */}
        <Marker longitude={truckLocationSimulation.lng} latitude={truckLocationSimulation.lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
            <img src={'https://cdn-icons-png.flaticon.com/512/1166/1166009.png'} alt="marker" width={30} />
        </Marker>

        {
            lat && lng && (
                <Marker longitude={lng} latitude={lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
                    <img src={'https://uploads-ssl.webflow.com/62c5e0898dea0b799c5f2210/62e8212acc540f291431bad2_location-icon.png'} alt="marker" width={40} />
                </Marker>
            )
        }

        {
            trucksLocations.map(truck => (
                <Marker key={truck.lat} longitude={truck.lng} latitude={truck.lat} anchor="bottom" scale={0.5} pitchAlignment={'viewport'}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/1166/1166009.png'} alt="marker" width={30} />
                </Marker>
            ))
        }
    </Map>
  );
};

export default MapV;
