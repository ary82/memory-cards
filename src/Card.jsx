import React from "react";
import { useEffect, useState } from "react";
import rng from "./rng.js";

export default function Card({ name, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
