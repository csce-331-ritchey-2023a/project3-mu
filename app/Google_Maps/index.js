import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import 'app/globals.css';

export default function Home() {
    const {isLoaded} = useLoadScript ({googleMapsApiKey: AIzaSyDVx7wMDvAIuW2La2bcJQZ2EK0sJdnIIts});

    // If google maps fails to load, display loading message
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map(){
    const center = useMemo(() => ({lat: 44, lng: -80}), []);
    return <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center}/>
    </GoogleMap>;
}