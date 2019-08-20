import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(res => {
                setLocations(res.data.results);
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
            {locations.map(location => {
              return <LocationCard name={location.name} type={location.type} dimension={location.dimension}/> //residents={location.residents} />
            })}
          </div>
        </section>
      );

}
