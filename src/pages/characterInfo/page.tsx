/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';
import EpisodeView from '../../components/episodeView/episodeView';
import LocationView from '../../components/locationView/locationView';
import style from './characterInfo.module.css';
import { useEffect, useState } from 'react';

export default function CharacterInfo(){
    const location = useLocation();
    const {
        characterImg,
        characterName,
        characterStatus,
        characterSpecie,
        characterGender,
        characterOrigin,
        characterLocation,
        characterEpisodes,
    } = location.state || {};

    const episodesArray = characterEpisodes?.split(',');

    const [locationData, setLocationData] = useState<any>(null);
    const [episodesData, setEpisodesData] = useState<any[]>([]);
    const [originData, setOriginData] = useState<any>(null);

    const fetchLocation = async () => {
        try {
            const locationResponse = await fetch(
                `https://rickandmortyapi.com/api/location?name=${characterLocation}`
            );
            const locationResult = await locationResponse.json();
            setLocationData(locationResult.results?.[0] || null);
        } catch (error) {
            console.error('Error fetching location', error);
        }
    };

    const fetchOrigin = async () => {
        try {
            const originResponse = await fetch(
                `https://rickandmortyapi.com/api/location?name=${characterOrigin}`
            );
            const originResult = await originResponse.json();
            setOriginData(originResult.results?.[0] || null);
        } catch (error) {
            console.error('Error fetching origin', error);
        }
    };

    const fetchEpisodes = async () => {
        try {
            const episodesResult = await Promise.all(
                episodesArray?.map(async (episodeUrl: string) => {
                    const response = await fetch(episodeUrl);
                    return await response.json();
                }) || []
            );
            setEpisodesData(episodesResult || []);
        } catch (error) {
            console.error('Error fetching episodes', error);
        }
    };

    useEffect(() => {
        if (characterLocation) fetchLocation();
    }, [characterLocation]);

    useEffect(() => {
        if (characterOrigin) fetchOrigin();
    }, [characterOrigin]);

    useEffect(() => {
        if (characterEpisodes) fetchEpisodes();
    }, [characterEpisodes]);


    return(
        <div className={style.main}>
            <h1 className={style.h1}>{characterName}</h1>
            
                <div className={style.characterInfo}>
                    <div className={style.characterImg}>
                        <img className={style.img} width={1000} height={1000} 
                        src={
                            typeof characterImg === 'string' ? characterImg : '../favicon.ico'
                        } 
                        alt={"character image"}/>
                    </div>
                    <div className={style.characterDetails}>
                        <div>
                            <h3>Status:</h3> 
                            <p>{characterStatus}</p>
                        </div>
                        <div>
                            <h3>Species:</h3>
                            <p>{characterSpecie}</p>
                        </div>
                        <div>
                            <h3>Gender:</h3>
                            <p>{characterGender}</p>
                        </div>
                    </div>
                </div>
                <div className={style.flexContainer}>
                    <div className={style.locationInfo}>
                        <h2 className={style.h2}>Current location:</h2>
                        {locationData ? (
                            <LocationView 
                            locationName={locationData.name}
                            locationType={locationData.type}
                            locationDimension={locationData.dimension}
                            locationResidents={locationData.residents}
                            key={locationData.id}
                        />
                        ) : (
                            <p>Location information not available.</p>
                        )}
                    </div>
                    <div className={style.locationInfo}>
                        <h2 className={style.h2}>Origin location:</h2>
                        {originData ? (
                            <LocationView 
                                locationName={originData.name}
                                locationType={originData.type}
                                locationDimension={originData.dimension}
                                locationResidents={originData.residents}
                                key={originData.id}
                            />
                        ) : (
                            <p>Origin information not available.</p>
                        )}
                    </div>
                </div>
            <div className={style.episodes}>
                <h2>Episodes where this character appears:</h2>
                <div className={style.episodeContainer}>
                    {episodesData ? episodesData.map((episode) => (
                        <EpisodeView
                            episodeName={episode.name}
                            episodeAirDate={episode.air_date}
                            episodeCode={episode.episode}
                            episodeCharacters={episode.characters}
                            key={episode.id}
                        />
                    )):( 
                    <p>Episodes information not available.</p>
                    )}
                </div>            
            </div>
        </div>
    );
}