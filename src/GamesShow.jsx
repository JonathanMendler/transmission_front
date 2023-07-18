/* eslint-disable react/prop-types */
export function GamesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("stat_id", props.stat.id);
    // New - Line 6 Displays specific reviews
    props.onUpdateGame(props.game.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Game Information</h1>
      <p>Name: {props.game.name}</p>
      <p>Genre: {props.game.genre}</p>
      <p>Player Support: {props.game.player_support}</p>
      <br></br>
    </div>
  );
}
