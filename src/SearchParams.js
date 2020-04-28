import React, { useState, useEffect } from "react";
import UseDropdown from "./UseDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updatelocation] = useState("initialState");
  const [breeds, Setbreeds] = useState([]);
  const [animal, AnimalDropdown] = UseDropdown("animal", "", ANIMALS);

  const [breed, BreedDropdown, Updatebreed] = UseDropdown("Breed", "", breeds);

  useEffect(() => {
    Setbreeds([]);
    Updatebreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedstring = breeds.map(({ name }) => name);
      Setbreeds(breedstring);
    }, console.error);
  }, [animal, Setbreeds, Updatebreed]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            onChange={(event) => updatelocation(event.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
      </form>
    </div>
  );
};

export default SearchParams;
