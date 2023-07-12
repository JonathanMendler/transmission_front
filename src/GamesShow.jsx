export function GamesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGame(props.game.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Game Information</h1>
      <p>Name: {props.game.name}</p>
      <p>Genre: {props.game.genre}</p>
      <p>Player Support: {props.game.player_support}</p>
      <p>Image URL: {props.game.image_url}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.game.name} name="name" type="text" />
        </div>
        <div>
          Genre: <input defaultValue={props.game.genre} name="genre" type="text" />
        </div>
        <div>
          Player Support: <input defaultValue={props.game.player_support} name="player_support" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.game.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update Game</button>
      </form>
    </div>
  );
}
