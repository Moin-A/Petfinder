import React from "react";
export default function Pet({ name }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name),
  //     React.createElement("h1", {}, props.breed),
  //     React.createElement("h1", {}, props.name),
  return <h1>{name}</h1>;
}
