/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';
import CharacterView from '../../components/characterView/characterView';
import style from './locationInfo.module.css';
import { useEffect, useState } from 'react';

export default function LocationInfo(){
    const location = useLocation();
    const { locationName, locationType, locationDimension, locationResidents } = location.state || {};
    const [characters, setCharacters] = useState<any[]>([]);

    const residentsArray = locationResidents?.split(',');

    const fetchCharacters = async () => {
        try {
            const charactersData = await Promise.all(
                residentsArray?.map(async (characterUrl: RequestInfo | URL) => {
                    const response = await fetch(characterUrl);
                    const data = await response.json();
                    return data;
                }) || []
            );
            setCharacters(charactersData || null);
        } catch (error) {
            console.error('Error fetching episodes', error);
        }
    };

    useEffect(() => {
        if(locationResidents){
            fetchCharacters();
        }
    },[characters]);

    return(
        <div className={style.main}>
            <h1 className={style.h1}>{locationName}</h1>
            <div className={style.locationInfo}>
                <div className={style.locationDetails}>
                    <div>
                        <h3>Type:</h3> 
                        <p>{locationType}</p>
                    </div>
                    <div>
                        <h3>Dimension:</h3>
                        <p>{locationDimension}</p>
                    </div>
                </div>
            </div>
            <div className={style.characters}>
                <h2 className={style.h2}>Characters that are in this location:</h2>
                <div className={style.charactersContainer}>
                    {characters ? characters.map((character) => (
                        <CharacterView 
                            characterImg={character.image}
                            characterName={character.name}
                            characterStatus={character.status}
                            characterSpecie={character.species}
                            characterGender={character.gender}
                            characterOrigin={character.origin.name}
                            characterLocation={character.location.name}
                            characterEpisodes={character.episode}
                            key={character.id}
                        />
                        )) : (
                            <p>Location information not available.</p>
                        )}
                </div>            
            </div>
        </div>
    );
}