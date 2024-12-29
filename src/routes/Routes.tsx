import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                <Route path="/CharactersList" element={<CharactersList />} />
                <Route path="/LocationsList" element={<LocationsList />} />
                <Route path="/EpisodesList" element={<EpisodesList />} />
                <Route path="/CharacterInfo" element={<CharacterInfo />} />
                <Route path="/LocationInfo" element={<LocationInfo />} />
                <Route path="/EpisodeInfo" element={<EpisodeInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default AppRoutes;