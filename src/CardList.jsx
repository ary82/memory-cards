import React from "react";
import { useEffect, useState } from "react";
import rng from "./rng.js";

export default function CardList({ num }) {
  const [cardList, setCardList] = useState([]);

  const getDataFromApi = async () => {
    try {
      let response = await fetch(
        `https://poKeapi.co/api/v2/pokemon/${rng(1, 1010)}`,
      );
      let response_json = await response.json();
      const item = {
        name: response_json.name,
        img: response_json.sprites.front_default,
        id: crypto.randomUUID(),
      };
      console.log(item);
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  async function populateArray() {
    let newArr = [];
    for (let index = 0; index < num; index++) {
      const item = await getDataFromApi();
      newArr.push(item);
    }
    setCardList(newArr);
  }

  useEffect(() => {
    populateArray();
  }, []);

  return (
    <div>
      CardLisjt
      <ul>
        {cardList.map((card) => (
          <li key={card.id}>
            <img src={card.img} alt="" />
            <h2>{card.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
