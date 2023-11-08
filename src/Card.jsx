import React from "react";

export default function Card({ name, image }) {
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </>
  );
}
