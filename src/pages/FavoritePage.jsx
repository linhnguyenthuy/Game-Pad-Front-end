import useCookie from "react-use-cookie";

const FavoritePage = () => {
  const [favoriteGames] = useCookie("favoriteGames", []);
  console.log(typeof favoriteGames);

  return (
    <div>
      {favoriteGames.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
