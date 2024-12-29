/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CharacterView from "../../components/characterView/characterView";
import EpisodeView from "../../components/episodeView/episodeView";
import LocationView from "../../components/locationView/locationView";
import style from "./home.module.css";

export default function Home() {
    const [characters, setCharacters] = useState<any>([]);
    const [locations, setLocations] = useState<any>([]);
    const [episodes, setEpisodes] = useState<any>([]);

    const characterFetch = async() => {
        const characterResponse = await fetch("https://rickandmortyapi.com/api/character");
        const characterData = await characterResponse.json();
        setCharacters(characterData.results.slice(0, 2));
    }

    const locationFetch = async() => {
        const locationResponse = await fetch("https://rickandmortyapi.com/api/location");
        const locationData = await locationResponse.json();
        setLocations(locationData.results.slice(0, 2));
    }

    const episodesFetch = async() => {
        const episodeResponse = await fetch("https://rickandmortyapi.com/api/episode");
        const episodeData = await episodeResponse.json();
        setEpisodes(episodeData.results.slice(0, 2));
    }

    useEffect(() => {
        characterFetch();
    },[characters]);

    useEffect(() => {
        locationFetch();
    },[locations]);

    useEffect(() => {
        episodesFetch();
    },[episodes]);

    return (
        <div className={style.main}>
        <h2>What can you do in this app?</h2>
        <h3 className={style.h3}>You can see all the characters from the series!</h3>
        <div className={style.container}>
        {characters.map((character: any) => (
            <CharacterView
            characterImg={character.image}
            characterName={character.name}
            characterStatus={character.status}
            characterSpecie={character.species}
            characterGender={character.gender}
            characterLocation={character.location.name}
            characterOrigin= {character.origin.name}
            characterEpisodes={character.episode}
            key={character.id}
            />
        ))}
        </div>
        <h3 className={style.h3}>All the locations!</h3>
        <div className={style.container}>
        {locations.map((location: any) => (
            <LocationView
            locationName={location.name}
            locationType={location.type}
            locationDimension={location.dimension}
            locationResidents={location.residents}
            key={location.id}
            />
        ))}
        </div>
        <h3 className={style.h3}>And the episodes!</h3>
        <div className={style.container}>
        {episodes.map((episode: any) => (
            <EpisodeView
            episodeName={episode.name}
            episodeAirDate={episode.air_date}
            episodeCode={episode.episode}
            episodeCharacters={episode.characters}
            key={episode.id}
            />
        ))}
        </div>
    </div>
    )
}