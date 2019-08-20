import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationsList from "./LocationsList";


export default function AppRouter() {
    return (
        <>
            <Route path='/character' component={CharacterList} />
            <Route path='/episode' component={EpisodeList}/>
            <Route path='/location' component={LocationsList}/>
        </>
    )
};
