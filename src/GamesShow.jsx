export function GamesShow(props) {
  return (
    <div>
      <h1>Game Information</h1>
      <p>Name: {props.game.name}</p>
      <p>Genre: {props.game.genre}</p>
      <p>Player Support: {props.game.player_support}</p>
    </div>
  );
}
