/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./locationsList.module.css";
import { useEffect, useState } from "react";
import LocationView from "../../components/locationView/locationView";

export default function LocationsList() {
    const [locations, setLocations] = useState<any>([]);
    const [locationsSearch, setlocationsSearch] = useState<string>("");

    const [isClient, setIsClient] = useState(false);

    const locationsListFetch = async() => {
        let locationsResponse;
        if(locationsSearch === ""){
            locationsResponse = await fetch("https://rickandmortyapi.com/api/location") || null;
        }else{
            locationsResponse = await fetch(`https://rickandmortyapi.com/api/location?name=${locationsSearch}`) || null;
        }
        const locationsData = await locationsResponse.json();
        setLocations(locationsData.results);
    }

    const handleSearch = (event: any) => {
        setlocationsSearch(event.target.value);
    }

    useEffect(() => {
        locationsListFetch();
    },[locations, locationsSearch]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>; 
    }

    return(
        <div className={style.main}>
            <div className={style.searchBarContainer}>
                <input type="text" className={style.searchBar} placeholder="Search for a location..." onChange={handleSearch}/>
            </div>
            <div className={style.locationsListContainer}>
                {locations ? locations.map((location: any) => (
                    <LocationView
                        key={location.id}
                        locationName={location.name}
                        locationType={location.type}
                        locationDimension={location.dimension}
                        locationResidents={location.residents}
                    />
                )): (
                    <p>No se encuentran resultados.</p>
                )}
            </div>
        </div>
    );
}