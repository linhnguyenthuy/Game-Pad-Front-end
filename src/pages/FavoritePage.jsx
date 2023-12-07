import useCookie from "react-use-cookie";

const FavoritePage = () => {
  const [favoriteGames] = useCookie("favoriteGames", JSON.stringify([]));

  let favoriteGamesArray;
  if (typeof favoriteGames === "string") {
    try {
      favoriteGamesArray = JSON.parse(favoriteGames);
    } catch (error) {
      console.error("Error parsing favoriteGames cookie:", error);
      favoriteGamesArray = [];
    }
  } else {
    favoriteGamesArray = favoriteGames;
  }

  return (
    <div>
      {favoriteGamesArray.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
