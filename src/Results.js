import React from "react";
import Pet from "./Pet";

const Results = ({ Pets }) => {
  return (
    <div className="search">
      {!Pets.length ? (
        <h1>No pets available</h1>
      ) : (
        Pets.map((x) => {
          return (
            <Pet
              animal={x.type}
              key={x.id}
              name={x.name}
              breed={x.breeds.primary}
              media={x.photos}
              location={`${x.contact.address.city}, ${x.contact.address.state}`}
              id={x.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
