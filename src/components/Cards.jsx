import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/photos')
          .then((res) => setCards(res.data))
      }, [])

  return (
   
    <div className="cards">
    {cards.map((card) => {
      return (
      
        <div className="cards">
        <div className="cardDiv">
        <div>
          <img
            src={card.url}
            alt=""
          />
        </div>
        <h3>{card.title}</h3>
      </div>
    
        </div>
      )
    })}
  </div>

  );
};

export default Cards;
