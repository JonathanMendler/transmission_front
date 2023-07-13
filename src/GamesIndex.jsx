/* eslint-disable react/prop-types */
export function GamesIndex(props) {
  return (
    <div>
      <h1>All Games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.image_url} />
          <p>Genre: {game.genre}</p>
          <p>Player Support: {game.player_support}</p>
          <button onClick={() => props.onShowGame(game)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
