import React, { useState, useEffect } from "react";
import UseDropdown from "./UseDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";

const SearchParams = () => {
  const [location, updatelocation] = useState("initialState");
  const [breeds, Setbreeds] = useState([]);
  const [animal, AnimalDropdown] = UseDropdown("animal", "", ANIMALS);

  const [breed, BreedDropdown, Updatebreed] = UseDropdown("Breed", "", breeds);
  const [Pets, SetPet] = useState([]);

  useEffect(() => {
    Setbreeds([]);
    Updatebreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedstring = breeds.map(({ name }) => name);
      Setbreeds(breedstring);
    }, console.error);
  }, [animal, Setbreeds, Updatebreed]);

  async function Requestpets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    SetPet(animals || []);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Requestpets();
        }}
      >
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
        <button> SUBMIT</button>
      </form>
      <Results Pets={Pets} />
    </div>
  );
};

export default SearchParams;
