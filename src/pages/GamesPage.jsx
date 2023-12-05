import React, { useEffect, useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/games?page=${page}`
        );
        setGames(response.data.results);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      }
    };
    fetchGames();
  }, [page]);
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleFirst = () => {
    setPage(1);
  };
  const handleLast = () => {
    setPage(2739);
  };

  return (
    <div>
      <div className="buttons">
        {page > 1 && <button onClick={handleFirst}>First</button>}
        {page > 1 && <button onClick={handlePrev}>Prev</button>}
        {page < 2739 && <button onClick={handleNext}>Next</button>}
        {page < 2739 && <button onClick={handleLast}>Last</button>}
      </div>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <Link to={`/games/${game.id}`}>
              <h2>{game.name}</h2>
              <img src={game.background_image} alt={game.name} />
            </Link>
          </div>
        ))}
      </div>
      <div className="buttons">
        {page > 1 && <button onClick={handleFirst}>First</button>}
        {page > 1 && <button onClick={handlePrev}>Prev</button>}
        {page < 2739 && <button onClick={handleNext}>Next</button>}
        {page < 2739 && <button onClick={handleLast}>Last</button>}
      </div>
    </div>
  );
};

export default GamesPage;
