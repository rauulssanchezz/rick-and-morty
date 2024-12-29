/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./episodesList.module.css";
import search from "../../assets/search.png";
import { useEffect, useState } from "react";
import EpisodeView from "../../components/episodeView/episodeView";

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState<any>([]);
    const [episodesSearch, setepisodesSearch] = useState<string>("");

    const locationsListFetch = async() => {
        let episodesResponse;
        if(episodesSearch === ""){
            episodesResponse = await fetch("https://rickandmortyapi.com/api/episode") || null;
        }else{
            episodesResponse = await fetch(`https://rickandmortyapi.com/api/episode?name=${episodesSearch}`) || null;
        }
        const episodesData = await episodesResponse.json();
        setEpisodes(episodesData.results);
    }

    const handleSearch = (event: any) => {
        setepisodesSearch(event.target.value);
    }

    useEffect(() => {
        locationsListFetch();
    },[episodes, episodesSearch]);

    return(
        <div className={style.main}>
            <div className={style.searchBarContainer}>
                <input type="text" className={style.searchBar} placeholder="Search for a character..." onChange={handleSearch}/>
                <img className={style.searchIcon} src={search} alt="search" width={20} height={20}/>
            </div>
            <div className={style.episodesListContainer}>
                {episodes ? episodes.map((episode: any) => (
                    <EpisodeView
                        key={episode.id}
                        episodeName={episode.name}
                        episodeAirDate={episode.air_date}
                        episodeCode={episode.episode}
                        episodeCharacters={episode.characters}
                    />
                )): (
                    <p>No se encuentran resultados.</p>
                )}
            </div>
        </div>
    );
}