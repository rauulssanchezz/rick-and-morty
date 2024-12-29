import { Route, Routes } from "react-router-dom";
import CharactersList from "../pages/charactersList/page";
import LocationsList from "../pages/locationsList/page";
import EpisodesList from "../pages/episodesList/page";
import CharacterInfo from "../pages/characterInfo/page";
import LocationInfo from "../pages/locationInfo/page";
import EpisodeInfo from "../pages/episodeInfo/page";
import Home from "../pages/home/home";
import NotFound from "../not-found";




function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters/CharactersList" element={<CharactersList />} />
            <Route path="/locations/LocationsList" element={<LocationsList />} />
            <Route path="/episodes/EpisodesList" element={<EpisodesList />} />
            <Route path="/characters/CharacterInfo" element={<CharacterInfo />} />
            <Route path="/locations/LocationInfo" element={<LocationInfo />} />
            <Route path="/episodes/EpisodeInfo" element={<EpisodeInfo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;