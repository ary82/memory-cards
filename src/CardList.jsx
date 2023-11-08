import React from "react";
import { useEffect, useState } from "react";
import rng from "./rng.js";
import Card from "./Card.jsx";
import "./styles/card.scss";

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
      return item;
    } catch (error) {
      console.log(error);
    }
  };

  async function populateArray() {
    let newArr = [];
    for (let index = 0; index < num; index++) {
      const item = await getDataFromApi();
      console.log(item);
      newArr.push(item);
    }
    setCardList(newArr);
    setloading(false);
    console.log(newArr);
  }
  const shuffle = () => {
    let newArr = [...cardList];
    newArr.sort(() => Math.random() - 0.5);
    setCardList(newArr);
  };

  const [loading, setloading] = useState(true);
  useEffect(() => {
    populateArray();
  }, []);

  return (
    <div>
      {loading ? <h1>loading...</h1> : console.log("complete")}
      <ul className="cardlist">
        {cardList.map((card) => (
          <li
            className="card"
            key={card.id}
            onClick={() => shuffle()}
          >
            <Card
              name={card.name}
              image={card.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
