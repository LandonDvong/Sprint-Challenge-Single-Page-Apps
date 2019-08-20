import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getChangedFilesForRoots } from "jest-changed-files";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  
  useEffect(() => {
    const getChar = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setChar(res.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }
    getChar();
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
    {char.map(char => {
     return <CharacterCard name={char.name} species={char.species} image={char.image} gender={char.gender} />
    })}
    </div>
    </section>
  );
}
