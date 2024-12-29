/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom';
import CharacterView from '../../components/characterView/characterView';
import style from './episodeInfo.module.css';
import { useEffect, useState } from 'react';

export default function EpisodeInfo(){
    const location = useLocation();
    const { episodeName, episodeAirDate, episodeCode, episodeCharacters } = location.state || {};
    const [characters, setCharacters] = useState<any[]>([]);

    const characterUrls = episodeCharacters?.split(',');

    const fetchCharacters = async () => {
        try {
            const charactersData = await Promise.all(
                characterUrls?.map(async (characterUrl: RequestInfo | URL) => {
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
        if(episodeCharacters){
            fetchCharacters();
        }
    },[episodeCharacters]);

    return(
        <div className={style.main}>
            <h1 className={style.h1}>{episodeName}</h1>
            <div className={style.episodeInfo}>
                <div className={style.episodeDetails}>
                    <div>
                        <h3>Air Date:</h3> 
                        <p>{episodeAirDate}</p>
                    </div>
                    <div>
                        <h3>Code:</h3>
                        <p>{episodeCode}</p>
                    </div>
                </div>
            </div>
            <div className={style.characters}>
                <h2 className={style.h2}>Characters that appear in this episode:</h2>
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