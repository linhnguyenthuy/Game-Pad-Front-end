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

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      <p>{game.description}</p>
    </div>
  );
};

export default GamesIdPage;
