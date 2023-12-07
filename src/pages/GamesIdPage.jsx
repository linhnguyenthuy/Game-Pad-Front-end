import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GamesIdPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`http://localhost:4000/games/${id}`);
      setGame(response.data);
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }
  const descriptionParts = game.description
    .split("<p>")
    .join("")
    .split("<br />")
    .join("")
    .split("</p>")
    .join("")
    .split("&#39")
    .join("")
    .split("<h3>")
    .join("")
    .split("</h3>")
    .join("")
    .split("<br/>")
    .join("");
  // const formattedDescription = descriptionParts.map((part, index) => {
  //   if (index > 0) {
  //     return <p key={index}>{part}</p>;
  //   } else {
  //     return part;
  //   }
  // });

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      {descriptionParts}
    </div>
  );
};

export default GamesIdPage;
