import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const CreatorsPage = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get(
        `http://localhost:4000/creators?page=${page}`
      );
      setGames(response.data.results);
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
      <div className="creators">
        {games.map((creator) => (
          <div key={creator.id}>
            <h2>{creator.name}</h2>
            <img
              src={
                creator.image ?? "https://demofree.sirv.com/nope-not-here.jpg"
              }
              alt={creator.name}
            />
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

export default CreatorsPage;
