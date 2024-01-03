import React from "react";
import { useEffect, useState } from "react";
import rng from "./rng.js";
import Card from "./Card.jsx";
import "./styles/card.scss";

export default function CardList({ num, check }) {
  const [cardList, setCardList] = useState([]);
  const [generated, setgenerated] = useState(0);

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

  const [loading, setloading] = useState(true);
  async function populateArray() {
    let newArr = [];
    for (let index = 0; index < num; index++) {
      const item = await getDataFromApi();
      setgenerated((s) => s + 1);
      console.log(item);
      newArr.push(item);
    }
    setloading(false);
    setCardList(newArr);
    console.log(newArr);
  }
  const shuffle = () => {
    let newArr = [...cardList];
    newArr.sort(() => Math.random() - 0.5);
    setCardList(newArr);
  };

  useEffect(() => {
    populateArray();
  }, []);

  return (
    <div>
      {loading
        ? <p className="loading">Generating Cards - {generated}/{num}</p>
        : (
          <ul className="cardlist">
            {cardList.map((card) => (
              <li
                className="card"
                key={card.id}
                onClick={() => {
                  check(card.name);
                  shuffle();
                }}
              >
                <Card
                  name={card.name}
                  image={card.img}
                />
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
