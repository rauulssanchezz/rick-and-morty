/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./charactersList.module.css";
import { useEffect, useState } from "react";
import CharacterView from "../../components/characterView/characterView";

export default function CharactersList() {
    const [characters, setCharacters] = useState<any>([]);
    const [charactersSearch, setCharactersSearch] = useState<string>("");

    const charactersListFetch = async() => {
        let characterResponse;
        if(charactersSearch === ""){
            characterResponse = await fetch("https://rickandmortyapi.com/api/character") || null;
        }else{
            characterResponse = await fetch(`https://rickandmortyapi.com/api/character?name=${charactersSearch}`) || null;
        }
        const characterData = await characterResponse.json();
        setCharacters(characterData.results);
    }

    const handleSearch = (event: any) => {
        setCharactersSearch(event.target.value);
    }

    useEffect(() => {
        charactersListFetch();
    },[characters, charactersSearch]);

    return(
        <div className={style.main}>
            <div className={style.searchBarContainer}>
                <input type="text" className={style.searchBar} placeholder="Search for a character..." onChange={handleSearch}/>
            </div>
            <div className={style.characterListContainer}>
                {characters ? characters.map((character: any) => (
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
                )): (
                    <p>No se encuentran resultados.</p>
                )}
            </div>
        </div>
    );
}