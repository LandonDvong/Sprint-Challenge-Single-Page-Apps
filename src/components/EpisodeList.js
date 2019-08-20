import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
            setEpisodes(res.data.results);
            console.log(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    // TODO: Add AJAX/API Request here - must run in useEffect
    //  Important: verify the 2nd useEffect parameter: the dependancies array!
  }, []);

  return (
    <section className="">
      <div>
        {episodes.map(episode => {
          return <EpisodeCard name={episode.name} air_date={episode.air_date} episode={episode.episode} />
        })}
      </div>
    </section>
  );
}